import React from 'react';
import Loader from './Loader';
import ListGenerator from './ListGenerator';

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
           {limitValue!==data.length || data.length===0?<Loader/>:<ListGenerator props={data}/>}             
           </div> 
           <div className="board-container">


           <div className="card card-image">
           
              
               <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                   <div>
                       <h5 className="pink-text"><i className="fa fa-pie-chart"></i>{entrie.limitValue}</h5>
                       <h3 className="card-title pt-2"><strong>This is card title</strong></h3>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
                           optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos.
                           Odit sed qui, dolorum!.</p>
                       <a className="btn btn-pink"><i className="fa fa-clone left"></i> View project</a>
                   </div>
               </div>
               
           </div>
        </div>
     </div>
 
    )
}

export default Home;