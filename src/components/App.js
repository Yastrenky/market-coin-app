import React, { Component } from 'react';
import Loader from './Loader';
import ListGenerator from './ListGenerator';
import Search from './Search';
import HeaderNav from './HeaderNav';
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
   
    }
  render() {

    console.log(this.state.limit)
    var limitValue=this.state.limit;
    var data = this.state.data;
    if(limitValue!==data.length){
    this.fetchLoadData();
    }



    return (
      <div className="app-container">
      <div className="header-user">
    
    <span className="logo-container">
      <span className="logo"></span>
      <span className="title">CryptoCoin-App</span>
      </span>


      <span className="user-form-container">
   <form>
     <div className="form-row">
      <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
      <input type="password" className="form-control" id="inputPassword4" placeholder="Password"/>    
      <button type="submit" className="btn btn-primary">Sign in</button>
       <span>or</span>
      <button type="submit" className="btn btn-primary">Register</button>
     </div>
   </form>
      </span>
      
      </div>
      <HeaderNav/>

      <div className="main-coins-container">
         <div className="left-nav">
            <div className="left-search">            
            <Search state={this.state} handleSelectet={this.handleSelectet} handelSearch={this.handleSearch}/>          
            </div>
            {limitValue!==data.length || data.length===0?<Loader/>:<ListGenerator props={data}/>}             
            </div> 
            <div className="board-container">
                    
         </div>
      </div>
      <div className="footer"></div>
       
      </div>
    );
  }
}


export default App;
