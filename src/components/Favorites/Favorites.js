import React, { Component } from 'react';
import './Favorites.css';
import TradingViewWidget from './tradingAPI';


class Favorites extends Component {
    state = {
        const_id: ""
    }


    render() {
        return (<div className="main-favorites-container">

            {
                this.props.state.favorites.map((e) => {
                    return (
                        <div key={e} className="favorite-card"  >
                            <div className="favorite-card-header" id={e} onClick={this.props.removeFromFavorites}>
                                <i className="fa  fa-remove left" ></i>
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