import React from 'react';


const Header = entrie => {

    return (

        <div className="header-user">

            <span className="logo-container">
                <span className="logo"></span>
                <span className="title">CryptoCoin-App</span>
            </span>


            <span className="user-form-container">
                {(entrie.user) ?
                    <div className = "user-conected">

                        
                              {entrie.state.photoURL !== "" ?
                                <span className="header-user-image" style={{ backgroundImage: 'url(' + entrie.state.photoURL + ')' }} />
                                :
                                <i className="fa fa-user-circle user-image" aria-hidden="true" />
                            }
                            <span>{entrie.state.user_name}</span>&nbsp;&nbsp;&nbsp;
                            {/* <span id="logout" className="badge badge-primary" onClick={entrie.logout}><p>Log out</p></span> */}
                        
                
                    </div> : null
                }
            </span>

        </div>

    )

}

export default Header;