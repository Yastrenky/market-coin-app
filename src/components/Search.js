import React from 'react';

const Search =entrie=>{

        return(
      
            <div className="left-search-container">
           <span><input value={entrie.state.searchValue} onChange={entrie.handelSearch}type="text" placeholder="Search..." /></span>
           <span><select value={entrie.state.limit} onChange={entrie.handleSelectet}
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
                   <option value="200">200</option>
                   <option value="400">400</option>
                   <option value="600">600</option>
                   <option value="800">800</option>
                   <option value="1000">1000</option>
</select></span>
</div>
        
            )
          
    }

export default Search;