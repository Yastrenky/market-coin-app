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
import auth from './Authentication/auth';
 auth();

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loged: true,
      user:{
        user_name:"",
        email:"",
        password:"",
        profile_date:"",
        favorites:[]
      },
      
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
    this.goToChart = this.goToChart.bind(this);
    this.loadUserdData = this.loadUserdData.bind(this);
    this.logout = this.logout.bind(this);
  }
  loadUserdData(){
    this.setState({
      user:{
        user_name:"Yastrenky",
        email:"",
        password:"",
        favorites:["BTC", "ETH", "XEM", "EOS"],
        date:"",
        settings:"",
      },
      selectedCoin:"litecoin",
      searchValue: ""
    })
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
  handleElementListCoinClick(e){
this.setState({selectedCoin:e.target.getAttribute("name")})
  }
  addToFavorites(e){
    var favorites = this.state.user.favorites;
    favorites.push(e.target.getAttribute("id"));
    this.setState({ user:{favorites : favorites}});
  }
  removeFromFavorites(e){
    if(e.target.getAttribute("id")){
    console.log("Element to erase: "+e.target.getAttribute("id"))
    var favorites = this.state.user.favorites;
    const index = favorites.indexOf(e.target.getAttribute("id").toString());
    favorites.splice(index, 1);
    this.setState({ user:{favorites : favorites}});
    }
  }
  goToChart(e){

    this.setState({selectedCoin : e.target.getAttribute("id")})
  }
  logout(){
    this.setState({loged:false})
  }
  componentDidMount() {
    
    this.fetchLoadData();
    this.fetchLoadALLData();
    this.setState(this.loadUserdData())
  }

  render() {
// console.log(this.state)



    return (
        
      <div className="app-container">
        <Header state = {this.state.user} user ={this.state.loged} logout = {this.logout} />

        {(this.state.loged)?<span>
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
          <Route path='/favorites' render={()=><Favorites
          state={this.state}
          removeFromFavorites={this.removeFromFavorites}
          goToChart={this.goToChart}
          />
          } />
          <Route path='/trade' component={Trade} />
          <Route path='/settings' render={()=><Settings state = {this.state}/>} />
          <Route path='/sign-in' component={SignIn} />
          <Route path='/sign-up' component={SignUp} />

        </Switch>
        </span>:<SignIn/>
  }
        <Footer />
      </div>
    );
  }
}


export default App;
