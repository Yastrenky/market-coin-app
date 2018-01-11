import React, { Component } from 'react';
import Loader from './Loader';
import ListGenerator from './ListGenerator';
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
       headers:{
        'Access-Control-Allow-Origin':''
        },
  
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
      <div className="nav-options-bar"></div>
      <div className="main-coins-container">
         <div className="left-nav">
            <div className="left-search">
            
            <Search state={this.state} handleSelectet={this.handleSelectet} handelSearch={this.handleSearch}/>
          
            </div>
            {limitValue!==data.length || data.length===0?<Loader/>:<ListGenerator props={data}/>}           
         </div>
      </div>
      <div className="footer"></div>
       
      </div>
    );
  }
}
function Search({state, handelSearch ,handleSelectet}){
  return(
    <div className="left-search-container">
           <span><input value={state.searchValue} onChange={handelSearch}type="text" placeholder="Search..." /></span>
           <span><select value={state.limit} onChange={handleSelectet}
           className="custom-select" id="country">
                   <option value="10">10</option>
                   <option value="20">20</option>
                   <option value="30">30</option>
                   <option value="40">40</option>
                   <option value="50">50</option>
                   <option value="60">60</option>
                   <option value="70">70</option>
                   <option value="80">80</option>
                   <option value="90">90</option>
                   <option value="100">100</option>
</select></span>
</div>
  )
}

export default App;
