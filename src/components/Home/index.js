import React from 'react';
import Loader from './Loader';
import ListGenerator from './ListGenerator';
import Board from './Board';
import Search from './Search';
const Home = entrie=>{
    var limitValue = entrie.state.limit;
    var data = entrie.state.data;
    var all_data = entrie.state.all_data;
    var searchValue = entrie.state.searchValue;
    if (limitValue !== data.length) {
      entrie.fetchLoadData();
    }
    if (all_data.length !== 0 && searchValue.length !== 0) {
      var array_result = []
      all_data.map(elem => {
        if ((elem.name.toLowerCase()).includes(searchValue.toLowerCase())) {
          array_result.push(elem)
        }

      })
      limitValue = array_result.length;
      data = array_result;
    }

    return(

        <div className="main-coins-container">
        <div className="left-nav">
           <div className="left-search">            
           <Search limit={limitValue} state={entrie.state} handleSelectet={entrie.handleSelectet} handelSearch={entrie.handleSearch}/>          
           </div>
           {limitValue!==data.length || data.length===0?<Loader/>:<ListGenerator props={data} handleElementListCoinClick={entrie.handleElementListCoinClick}/>}             
           </div> 
<Board state={entrie.state}/>
     </div>
 
    )
}

export default Home;