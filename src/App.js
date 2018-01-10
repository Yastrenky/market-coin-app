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
    fetch("https://api.coinmarketcap.com/v1/ticker/?limit=50" ,{ method: 'GET'})
    .then(response => response.json())
    .then(newData => this.setState({data: newData}))
    .catch(e => e);
  }
  componentDidMount(){
    this.fetchLoadData();
    }
  render() {

 var data = this.state.data;
 console.log(data.length);
    return (
      <div className="app-container">
      <div className="header"></div>
      <div className="nav-options-bar"></div>
      <div className="main-coins-container">
         <div className="left-nav">
            <div className="left-search"></div>
            {data.length===0?<Loader/>:<ListGenerator props={data}/>}
             
         
         </div>

      
      
      
      </div>
      <div className="footer"></div>
       
      </div>
    );
  }
}
function Loader(){
  return(
    <div className="loader-gif"></div>
  )
}
function ListGenerator({props}){
  return(
    <div className="coins-list-container">
    
                { props.map(item => ( 
             <div className="coin-element-list" key={item.id}> 
                <span className={"cc "+item.symbol} title={item.symbol}></span>
                <span>{item.id.toUpperCase()}</span>
             </div>
           ))
             }
                
                </div>

  );
}
export default App;
