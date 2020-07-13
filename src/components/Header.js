import React from 'react';


const Header = () => {
    return (
        <div className="header-user">
            <span className="logo-container">
                <span className="logo"></span>
                <span className="title">CryptoCoin-App</span>
            </span>

            <span className="user-form-container">
                <div className="user-conected">
                    <i className="fa fa-user-circle user-image" aria-hidden="true" />
                    </div>
            </span>
        </div>
    )
}

export default Header;