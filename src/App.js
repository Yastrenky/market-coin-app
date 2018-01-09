import React, { Component } from 'react';


class App extends Component {
  constructor(props){
    super(props);
 
    this.state = {
        data:[]
    }
    this.fetchLoadData = this.fetchLoadData.bind(this);
  }
  fetchLoadData(){
    fetch("https://api.coinmarketcap.com/v1/ticker/?limit=20" ,{ method: 'GET'})
    .then(response => response.json())
    .then(newData => this.setState({data: newData}))
    .catch(e => e);
  }
  componentDidMount(){
    this.fetchLoadData();
    }
  render() {

    return (
      <div className="app-container">
      <div className="header"></div>
      <div className="nav-options-bar"></div>
      <div className="main-coins-container">
         <div className="left-nav">
            <div className="left-search"></div>
            <div className="coins-list-container">
            { this.state.data.map(item => ( 
         <div className="coin-element-list" key={item.id}><p>{item.id.toUpperCase()}</p></div>
       ))
         }
            
            </div>
         
         </div>

      
      
      
      </div>
      <div className="footer"></div>
       
      </div>
    );
  }
}

export default App;
