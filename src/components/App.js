import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Header from './Header';
import HeaderNav from './HeaderNav';
import SignUp from './SignUp';
import SignIn from './SignIn'
import Footer from './Footer';
import Home from './Home/Home';
import Settings from './Settings/Settings'
import Favorites from './Favorites/Favorites';
import Trade from './Trade/Trade';
import firebase from "firebase";
import config from './firebase_config/config';

firebase.initializeApp(config());
const auth = firebase.auth
const provider = new firebase.auth.FacebookAuthProvider();

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loged: true,
      favorites: ["BTC", "ETH", "XEM", "EOS"],
      user: {
        user_name: "GUEST",
        email: "",
        password: "",
        profile_date: "",
        facebook_id: "",
        photoURL: "",
      },

      all_data: [],
      data: [],
      limit: 10,
      selectedCoin: "bitcoin",
      searchValue: ""
    }
    this.fetchLoadData = this.fetchLoadData.bind(this);
    this.fetchLoadALLData = this.fetchLoadALLData.bind(this);
    this.handleSelectet = this.handleSelectet.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleElementListCoinClick = this.handleElementListCoinClick.bind(this);
    this.addToFavorites = this.addToFavorites.bind(this);
    this.removeFromFavorites = this.removeFromFavorites.bind(this);
    this.goToChart = this.goToChart.bind(this);
    // this.loadUserdData = this.loadUserdData.bind(this);
    this.logout = this.logout.bind(this);
  }
  async login() {
    const self = this;
    await auth().signInWithPopup(provider).then(function (result) {
      console.log(result);

      self.setState({
        loged: true,
        favorites: ["BTC", "ETH", "XEM", "EOS"],
        user: {
          user_name: result.user.displayName,
          email: "",
          password: "",
          facebook_id: result.user.uid,
          date: "",
          settings: "",
          photoURL: result.user.photoURL,
        }
      })
    }).catch(function (error) {

    });
  }

  fetchLoadData() {
    // console.log("external access")
    var limit = this.state.limit;
    var urllimited = "https://api.coinmarketcap.com/v1/ticker/?limit=" + limit;
    fetch(urllimited, {
      method: 'GET',


    }).then(response => response.json())
      .then(newData => this.setState({ data: newData }))
      .catch(e => e);
  }
  fetchLoadALLData() {
    // console.log("all data");
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
  handleElementListCoinClick(e) {
    this.setState({ selectedCoin: e.target.getAttribute("name") })
  }
  addToFavorites(e) {

    const self = this;
    var favorites = this.state.favorites;
    favorites.push(e.target.getAttribute("id"));

    firebase.database().ref().push({

      username: String(self.state.user.user_name) || "Guest",
      facebook_id: String(self.state.user.facebook_id),
      favorites: favorites,

    })
      .then(res => console.log(res));

    this.setState({ favorites: favorites });
  }
  removeFromFavorites(e) {
    if (e.target.getAttribute("id")) {
      console.log("Element to erase: " + e.target.getAttribute("id"))
      var favorites = this.state.favorites;
      const index = favorites.indexOf(e.target.getAttribute("id").toString());
      favorites.splice(index, 1);
      this.setState({ favorites: favorites });
    }
  }
  goToChart(e) {

    this.setState({ selectedCoin: e.target.getAttribute("id") })
  }
  logout() {
    const self = this;
    console.log("out")
    firebase.auth().signOut().then(function () {
      console.log("out");
      self.setState({ loged: false })
      // Sign-out successful.
    }).catch(function (error) {
      console.log(error);
    });

  }
  componentDidMount() {

    this.fetchLoadData();
    this.fetchLoadALLData();
    // this.setState(this.loadUserdData())
  }

  render() {
    // console.log(this.state)



    return (

      <div className="app-container">
        <Header state={this.state.user} user={this.state.loged} logout={this.logout} />
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
                handleSearch={this.handleSearch}
              />}
            />
            <Route path='/favorites' render={() => <Favorites
              state={this.state}
              removeFromFavorites={this.removeFromFavorites}
              goToChart={this.goToChart}
            />
            } />
            <Route path='/trade' component={Trade} />
            <Route path='/settings' render={() => <Settings state={this.state} />} />
            <Route path='/sign-in' render={() => <SignIn login={this.login.bind(this)} />} />
            <Route path='/sign-up' component={SignUp} />

          </Switch>
        <Footer />
      </div>
    );
  }
}


export default App;
