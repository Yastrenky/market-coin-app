import React from 'react';
import TradingViewWidget from 'react-tradingview-widget';

const Board = ({ data, favorites, addToFavorites, removeFromFavorites, selectedCoin}) => {

    let button_text = "ADD TO FAVORITES";
    let button_action = addToFavorites;
    let button_color = "btn btn-blue hvr-float-shadow";
    let button_icon = "fa  fa-star left";
    const result = data.find((e) => e.name.toLowerCase() === selectedCoin.toLowerCase());

    if (result && favorites.indexOf(result.symbol) >= 0) {
        button_text = "REMOVE FROM FAVORITES";
        button_action = removeFromFavorites;
        button_color = "btn btn-red hvr-float-shadow";
        button_icon = "fa  fa-remove left";
    }
    const currencyData = result && result.quote.USD

    return (

        <div className="board-container">
            <div className="card card-image">
                {(currencyData) ? <div>
                    <div className="coin-percent-change">
                        <span>
                            <div>1H&nbsp;</div>
                            <strong style={parseFloat(currencyData.percent_change_1h) >= 0 ? { color: 'green' } : { color: 'red' }}>{
                                currencyData.percent_change_1h.toString()}%</strong>
                        </span>
                        <span>
                            <div>24H&nbsp;</div>
                            <strong style={parseFloat(currencyData.percent_change_24h) >= 0 ? { color: 'green' } : { color: 'red' }}>{currencyData.percent_change_24h.toString()}%</strong>
                        </span>
                        <span>
                            <div>7D&nbsp;</div>
                            <strong style={parseFloat(currencyData.percent_change_7d) >= 0 ? { color: 'green' } : { color: 'red' }}>{currencyData.percent_change_7d.toString()}%</strong>
                        </span>
                    </div>
                    <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                        <div>
                            <h5 className="pink-text"><i className="fa fa-pie-chart"></i>  {result.name.toUpperCase()}</h5>
                            <h3 className="card-title pt-2"><strong>Price: ${currencyData.price} </strong></h3>
                            <p className=" pt-2">Market Cap: ${currencyData.market_cap} </p>
                            <p className=" pt-2">Circulating supply: {result.circulating_supply} btc</p>
                            <p className=" pt-2">Total Supply: {result.total_supply} btc</p>
                            <p className=" pt-2">Max Supply: {result.max_supply} btc</p>

                            <div className={button_color}
                                id={result.symbol}
                                onClick={button_action}
                            >
                                <i className={button_icon}></i> {button_text}</div>

                        </div>
                    </div></div> : null
                }


            </div>
            <TradingViewWidget
                symbol={(result) ? (result.symbol + "USD") : ("BTCUSD")}
                theme="Dark"
                locale="usa"
                allow_symbol_change="false"
                autosize
            />
        </div>


    )
}

export default Board;