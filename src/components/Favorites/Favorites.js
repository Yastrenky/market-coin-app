import React, { Component } from 'react';
import './Favorites.css';
import TradingViewWidget from './tradingAPI';
import { Link } from 'react-router-dom';

class Favorites extends Component {
    state = {
        const_id: ""
    }

    findName = (params) => {
        const { data } = this.props
        const foundElem = data.find(e => e.symbol === params)
        return foundElem ? foundElem.name : ""
    }

    render() {
        const { props: { favorites, goToChart, removeFromFavorites }, findName } = this

        return (<div className="main-favorites-container">
            {
                favorites.map((e) => {
                    return (
                        <div key={e} className="favorite-card"  >
                            <div className="favorite-card-header" >
                                <Link to='/coin'><span className="fa fa-area-chart" id={findName(e)} onClick={goToChart}></span></Link>
                                <span className="fa  fa-remove" id={e} onClick={removeFromFavorites}></span>

                            </div>
                            <div className="favorite-card-chart">
                                <TradingViewWidget symbol={e + "USD"} id={e + "USD"} />
                            </div>
                        </div>
                    );
                })}
        </div>);
    }
}

export default Favorites;