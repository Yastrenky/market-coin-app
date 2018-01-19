import React, { Component } from 'react';
import HeaderNav from './HeaderNav';
import SignUp from './SignUp';
import SignIn from './SignIn'
import Home from './Home';
class App extends Component {
  constructor(props){
    super(props);
 
    this.state = {
        all_data:[],
        data:[],
        limit:10,
        searchValue:""
    }
    this.fetchLoadData = this.fetchLoadData.bind(this);
    this.fetchLoadALLData = this.fetchLoadALLData.bind(this);
    this.handleSelectet= this.handleSelectet.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  fetchLoadData(){
    console.log("external access")
    var limit = this.state.limit;
    var urllimited="https://api.coinmarketcap.com/v1/ticker/?limit="+limit;
    fetch(urllimited,{
       method: 'GET',

  
  }).then(response => response.json())
  .then(newData => this.setState({data: newData}))
  .catch(e => e);
}
  fetchLoadALLData(){
    var urllimited="https://api.coinmarketcap.com/v1/ticker/?limit=1000";
    fetch(urllimited,{
       method: 'GET',

  
  })
    .then(response => response.json())
    .then(newData => this.setState({all_data: newData}))
    .catch(e => e);
  }
  handleSearch(e){

    this.setState({
      searchValue:e.target.value,
      
    });
  }
  handleSelectet(e){
    this.setState({limit:parseFloat(e.target.value)});

  }
  componentDidMount(){
    this.fetchLoadData();
   this.fetchLoadALLData();
    }
  render() {

    var limitValue=this.state.limit;
    var data = this.state.data;
    var all_data= this.state.all_data;
    var searchValue=this.state.searchValue;
    if(limitValue!==data.length  ){
    this.fetchLoadData();
    }
   if(all_data.length!==0 && searchValue.length!==0){
     var array_result=[]
    all_data.map(elem=>{
   if((elem.name.toLowerCase()).includes(searchValue.toLowerCase())){
     array_result.push(elem)
   }
  
  })
  limitValue=array_result.length;
  data=array_result;
   }


    return (
      <div className="app-container">
      <div className="header-user">
    
    <span className="logo-container">
      <span className="logo"></span>
      <span className="title">CryptoCoin-App</span>
      </span>


      <span className="user-form-container">
       <span>Login as:  <i className="fa fa-user-circle user-image" aria-hidden="true"></i> Yastrenky</span> <span className="badge badge-primary">Log out</span>
      </span>
      
      </div>
      {/* <SignIn/> */}




       <HeaderNav/>      
         <Home 
       limitValue={limitValue} 
        data={data} 
        state={this.state}
        handleSelectet={this.handleSelectet}
       handleSearch={this.handleSearch} />

      <div className="footer">
      <p>
      &copy;{(new Date().getFullYear())} CryptoCoin-App

            &nbsp;&nbsp;&nbsp;&nbsp;

      Design by <a href="http://ybravo.fvi-grad.com">Yastrenky Bravo</a> &nbsp;

           | &nbsp;<a href="https://github.com/Yastrenky"><i className="fa fa-github link"></i></a> &nbsp;
           | &nbsp;<a href="https://www.facebook.com/profile.php?id=100008211978623"><i className="fa fa-facebook link"></i></a> &nbsp;
           | &nbsp;<a href="https://www.linkedin.com/in/yastrenky-bravo-192354151/"><i className="fa fa-linkedin link"></i></a>&nbsp;
           | &nbsp;<a href="https://plus.google.com/u/1/113492438526616026377"><i className="fa fa-google link"></i></a>&nbsp;


      </p>
      </div>
       
      </div>
    );
  }
}


export default App;
