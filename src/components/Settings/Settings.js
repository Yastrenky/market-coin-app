import React from 'react';
import './Settings.css';
const Settings = entrie => {
    console.log(entrie)

    return (

        <div className="main-settings-container">
            <div className="profile_container">
                <div className="column1">
                    {entrie.state.photoURL !== "" ?
                        <span className="header-user-image image_profile  user-image" style={{ backgroundImage: 'url(' + entrie.state.user.photoURL + ')' }} />
                        :
                        <div className="image_profile fa fa-user-circle user-image"></div>
                    }
                    <div><p>User Name: <br />{entrie.state.user.user_name}</p></div>

                </div>
                <div className="column2">


                </div>


            </div>
        </div>
    )
}

export default Settings;