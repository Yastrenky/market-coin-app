import React, { Component } from 'react';
import Loader from './Loader';
import ListGenerator from './ListGenerator';
import Search from './Search'
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
    this.handleSelectet= this.handleSelectet.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  fetchLoadData(){
    console.log("external access")
    var limit = this.state.limit;
    var urllimited="https://api.coinmarketcap.com/v1/ticker/?limit="+limit;
    fetch(urllimited,{
       method: 'GET',

  
  })
    .then(response => response.json())
    .then(newData => this.setState({data: newData}))
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
    var limitValue=this.state.limit;
    var data = this.state.data;
    if(limitValue!==data.length){
    this.fetchLoadData();
    }



    return (
      <div className="app-container">
      <div className="header"></div>
      <div className="nav-options-bar">
      <span className="hvr-grow" ><i className="fa fa-home "></i></span>
      <span className="hvr-grow"><i className="fa fa-exchange"></i></span>
      <span className="hvr-grow"><i className="fa fa-cloud"></i></span>
      <span className="hvr-grow"><i className="fa fa-cogs"></i></span>
      </div>
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
