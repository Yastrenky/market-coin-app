import React from 'react';

const Board = props=>{
var button_text="ADD TO FAVORITES";
var selectedCoin= props.state.selectedCoin;
var arrayList = props.state.all_data;
var result =arrayList.find((e)=>e.name.toLowerCase()===selectedCoin.toLowerCase());

    return(

           <div className="board-container">


           <div className="card card-image">
           {(arrayList && arrayList.length)?
              
               <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                   <div>
                       <h5 className="pink-text"><i className="fa fa-pie-chart"></i>  {result.name.toUpperCase()}</h5>
                       <h3 className="card-title pt-2"><strong>Price: ${result.price_usd} </strong></h3>
                       <p className=" pt-2">Price Bitcoin: {parseFloat(result.price_btc)} btc </p>
                       <p className=" pt-2">Market Cap: ${result.market_cap_usd} </p>
                       <p className=" pt-2">Available_Supply: {result.available_supply} btc</p>
                       <p className=" pt-2">Total Supply: {result.total_supply} btc</p>
                       <p className=" pt-2">Max Supply: {result.max_supply} btc</p>

                       <div className="btn btn-pink" ><i className="fa fa-clone left"></i> {button_text}</div>
                   </div>
               </div>:null
            }
           </div>
        </div>
    
 
    )
}

export default Board;