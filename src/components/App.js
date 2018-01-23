import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Header from './Header';
import HeaderNav from './HeaderNav';
import SignUp from './SignUp';
import SignIn from './SignIn'
import Footer from './Footer';
import Home from './container/Home'
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      all_data: [],
      data: [],
      limit: 10,
      searchValue: ""
    }
    this.fetchLoadData = this.fetchLoadData.bind(this);
    this.fetchLoadALLData = this.fetchLoadALLData.bind(this);
    this.handleSelectet = this.handleSelectet.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
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
  componentDidMount() {
    this.fetchLoadData();
    this.fetchLoadALLData();
  }
  render() {

    


    return (
      <div className="app-container">
        <Header />
        <HeaderNav />

        <Switch>
          <Route exact path='/' 
          render={() => <Home

            state={this.state}
            fetchLoadData={this.fetchLoadData}
            handleSelectet={this.handleSelectet}
            handleSearch={this.handleSearch} />} 
            />
          <Route path='/sign-in' component={SignIn} />
          <Route path='/sign-up' component={SignUp} />

        </Switch>
        <Footer />
      </div>
    );
  }
}


export default App;
