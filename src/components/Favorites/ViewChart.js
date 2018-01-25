import React, { Component } from 'react';
import TradingViewWidget from 'react-tradingview-widget';
class Chart extends Component {
    render(){
        return(
            <TradingViewWidget
           
            symbol="USD"
            theme="Dark"
            locale="usa"
            allow_symbol_change="false"
            hide_top_toolbar="true"
            autosize
        />
            )
          
    }
}
export default Chart;