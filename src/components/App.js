import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Header from './Header';
import HeaderNav from './HeaderNav';
import SignUp from './SignUp';
import SignIn from './SignIn'
import Footer from './Footer';
import Home from './Home/Home'
import Favorites from './Favorites/Favorites'
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favorites:["BTC"],
      all_data: [],
      data: [],
      limit: 10,
      selectedCoin:"bitcoin",
      searchValue: ""
    }
    this.fetchLoadData = this.fetchLoadData.bind(this);
    this.fetchLoadALLData = this.fetchLoadALLData.bind(this);
    this.handleSelectet = this.handleSelectet.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleElementListCoinClick = this.handleElementListCoinClick.bind(this);
    this.addToFavorites=this.addToFavorites.bind(this);
    this.removeFromFavorites= this.removeFromFavorites.bind(this);
  }

  fetchLoadData() {
    console.log("external access")
    var limit = this.state.limit;
    var urllimited = "https://api.coinmarketcap.com/v1/ticker/?limit=" + limit;
    fetch(urllimited, {
      method: 'GET',


    }).then(response => response.json())
      .then(newData => this.setState({ data: newData }))
      .catch(e => e);
  }
  fetchLoadALLData() {
    console.log("all data");
    var urllimited = "https://api.coinmarketcap.com/v1/ticker/?limit=1000";
    fetch(urllimited, {
      method: 'GET',


    })
      .then(response => response.json())
      .then(newData => this.setState({ all_data: newData }))
      .catch(e => e);
  }
  handleSearch(e) {

    this.setState({
      searchValue: e.target.value,

    });
  }
  handleSelectet(e) {
    this.setState({ limit: parseFloat(e.target.value) });

  }
  handleElementListCoinClick(e){
this.setState({selectedCoin:e.target.getAttribute("name")})
  }
  addToFavorites(e){
    var favorites = this.state.favorites;
    favorites.push(e.target.getAttribute("value"));
    this.setState({ favorites : favorites});
  }
  removeFromFavorites(e){
    var favorites = this.state.favorites;
    const index = favorites.indexOf(e.target.getAttribute("value"));
    favorites.splice(index, 1);
    this.setState({ favorites : favorites});
  }
  
  componentDidMount() {
    
    this.fetchLoadData();
    this.fetchLoadALLData();
  }

  render() {
   console.log(this.state.favorites)



    return (
  
      <div className="app-container">
        <Header />
        <HeaderNav />

        <Switch>
          <Route exact path='/' 
          render={() => <Home

            state={this.state}
            addToFavorites={this.addToFavorites}
            removeFromFavorites={this.removeFromFavorites}
            handleElementListCoinClick={this.handleElementListCoinClick}
            fetchLoadData={this.fetchLoadData}
            handleSelectet={this.handleSelectet}
            handleSearch={this.handleSearch} />} 
            />
          <Route path='/favorites' render={()=><Favorites
          state={this.state}
          removeFromFavorites={this.removeFromFavorites}
          
          />
          } />
          <Route path='/trade' component={SignIn} />
          <Route path='/settings' component={SignIn} />
          <Route path='/sign-in' component={SignIn} />
          <Route path='/sign-up' component={SignUp} />

        </Switch>
        <Footer />
      </div>
    );
  }
}


export default App;
