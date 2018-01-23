import React from 'react';

const ListGenerator =props=>{

        return(
      
            <div className="coins-list-container">
                 { props.props.map(item => ( 
                     <div className="coin-element-list hvr-underline-from-center hvr-grow" key={item.id} name={item.name} onClick={props.handleElementListCoinClick}  > 
                        <span className={"cc "+item.symbol} title={item.symbol} name={item.name}></span>
                        <span name={item.name}>{item.name.toUpperCase()}</span>
                     </div>
                   ))
                     }
             </div>
        
            )
          
    }

export default ListGenerator;

