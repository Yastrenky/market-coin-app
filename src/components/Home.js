import React from 'react';
import Loader from './Loader';
import ListGenerator from './ListGenerator';
import Search from './Search';
const Home = entrie=>{
    return(
        <div className="main-coins-container">
        <div className="left-nav">
           <div className="left-search">            
           <Search limit={entrie.limitValue} state={entrie.state} handleSelectet={entrie.handleSelectet} handelSearch={entrie.handleSearch}/>          
           </div>
           {entrie.limitValue!==entrie.data.length || entrie.data.length===0?<Loader/>:<ListGenerator props={entrie.data}/>}             
           </div> 
           <div className="board-container">
                   
        </div>
     </div>
    )
}

export default Home;