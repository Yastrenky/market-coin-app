import React, { Component } from 'react';
import './Favorites.css';
import TradingViewWidget from 'react-tradingview-widget';
import { URLProvider } from 'react-url';



const Favorites = props => {




    return (

        <div className="main-favorites-container">

            {props.state.favorites.map((e) => (
                <div key={e} className="favorite-card" value={e} onClick={props.removeFromFavorites}>
                    <div className="favorite-card-header" ><i className="fa  fa-remove left"></i></div>
                    <div className="favorite-card-chart" id={e}>

                   <TradingViewWidget
           name={e}
            symbol={e+"USD"}
            theme="Dark"
            locale="usa"
            allow_symbol_change="false"
            hide_top_toolbar="true"
            autosize
        />
                    
                     
                    </div>



                </div>

            ))}

        </div>


    )
}

export default Favorites;