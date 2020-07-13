import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Header from './Header';
import HeaderNav from './HeaderNav';
import Footer from './Footer';
import Home from './Home/Home';
import Favorites from './Favorites/Favorites';
import Trade from './Trade/Trade';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      favorites: ["BTC", "ETH"],
      data: [],
      limit: 10,
      selectedCoin: "bitcoin",
      searchValue: ""
    }
  }

  fetchLoadData = () => {
    const { state: { limit } } = this

    const qr = `?limit=${limit}`
    const url = "http://localhost/coin-data"

    fetch(url + qr, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8',
        'Accept-Encoding': 'deflate, gzip'
      }
    }).then(response => response.json())
      .then(({ data }) => this.setState({ data }))
      .catch(e => console.log(e));
  }

  handleSearch = (e) => { this.setState({ searchValue: e.target.value }) }

  handleSelectet = (e) => { this.setState({ limit: parseFloat(e.target.value) }, () => this.fetchLoadData()) }

  handleElementListCoinClick = (e) => { this.setState({ selectedCoin: e.target.getAttribute("name") }) }

  addToFavorites = (e) => {
    var favorites = this.state.favorites;
    favorites.push(e.target.getAttribute("id"))
    this.setState({ favorites: favorites })
  }

  removeFromFavorites = (e) => {
    if (e.target.getAttribute("id")) {
      console.log("Element to erase: " + e.target.getAttribute("id"))
      var favorites = this.state.favorites;
      const index = favorites.indexOf(e.target.getAttribute("id").toString());
      favorites.splice(index, 1);
      this.setState({ favorites: favorites });
    }
  }

  goToChart = (e) => {
    this.setState({ selectedCoin: e.target.getAttribute("id") })
  }

  componentDidMount() {
    this.fetchLoadData();
  }

  render() {
    const { state: { data, limit, favorites, searchValue, selectedCoin, }, addToFavorites, removeFromFavorites, handleElementListCoinClick, handleSelectet, handleSearch, goToChart } = this
    return (

      <div className="app-container">
        <Header />
        <HeaderNav />
        <Switch>
          <Route exact path='/coin'
            render={() => <Home
              state={this.state}
              {...{
                data,
                favorites,
                limit,
                addToFavorites,
                removeFromFavorites,
                handleElementListCoinClick,
                handleSelectet,
                handleSearch,
                searchValue,
                selectedCoin
              }}
            />}
          />
          <Route path='/favorites' render={() => <Favorites
            {...{
              data,
              favorites,
              removeFromFavorites,
              goToChart
            }}
          />
          } />
          <Route path='/trade' render={() => <Trade />} />
        </Switch>
        <Footer />
      </div>
    );
  }
}


export default App;
