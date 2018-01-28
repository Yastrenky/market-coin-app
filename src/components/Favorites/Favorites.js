import React, { Component } from 'react';
import './Favorites.css';
import TradingViewWidget from './tradingAPI';
import { Link } from 'react-router-dom';

class Favorites extends Component {
    state = {
        const_id: ""
    }
   findName(params) {
       var value = "";
       var result = this.props.state.all_data.map(e=>{
        if(e.symbol===params){
            value = e.name

        }});
        return value;
        
    }

    render() {
        return (<div className="main-favorites-container">

            {
                this.props.state.user.favorites.map((e) => {
                    return (
                        <div key={e} className="favorite-card"  >
                            <div className="favorite-card-header" >
                            <Link to='/'><span className="fa fa-area-chart" id={this.findName(e)} onClick={this.props.goToChart}></span></Link>
                                <span className="fa  fa-remove" id={e} onClick={this.props.removeFromFavorites}></span>

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