import React from 'react';
import { Link } from 'react-router-dom';

const HeaderNav =entrie=>{
    
            return(
          
      <div className="nav-options-bar" id="gradient" >
      <Link to='/'><span className="hvr-grow" ><i className="fa fa-home "></i></span></Link>
      <Link to='/favorites'> <span className="hvr-grow"><i className="fa  fa-star"></i></span></Link>
      <Link to='/trade'> <span className="hvr-grow"><i className="fa fa-exchange"></i></span> </Link>
      {/* <Link to='/settings'> <span className="hvr-grow"><i className="fa fa-cogs"></i></span></Link> */}
      </div>
            
                )
              
        }
    
    export default HeaderNav;