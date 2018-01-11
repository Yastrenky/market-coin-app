import React from 'react';

const ListGenerator =entrie=>{

        return(
      
            <div className="coins-list-container">
                 { entrie.props.map(item => ( 
                     <div className="coin-element-list" key={item.id}> 
                        <span className={"cc "+item.symbol} title={item.symbol}></span>
                        <span>{item.id.toUpperCase()}</span>
                     </div>
                   ))
                     }
             </div>
        
            )
          
    }

export default ListGenerator;