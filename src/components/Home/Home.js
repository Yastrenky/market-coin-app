import React from 'react';
import Loader from './Loader';
import ListGenerator from './ListGenerator';
import Board from './Board';
import Search from './Search';
const Home = entrie=>{
    var limitValue = entrie.state.limit;
    var data = entrie.state.data;
    return (

      <div className="main-coins-container">
        <div className="left-nav">
          <div className="left-search">            
          <Search limit={limitValue} state={entrie.state} handleSelectet={entrie.handleSelectet} handelSearch={entrie.handleSearch}/>          
          </div>
          {limitValue!==data.length || data.length===0?<Loader/>:<ListGenerator props={data} handleElementListCoinClick={entrie.handleElementListCoinClick}/>}             
        </div> 
        <Board state={entrie.state} props={entrie}/>
      </div>
  
    )
}

export default Home;