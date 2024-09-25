import React from 'react';
import propTypes from 'prop-types';
import './Profile.css';

//child component ang Profile.js under the parent UserProfile.js
function Profile({user: {name, email, username}}){
    return (
        <div className="mang-inasal-profile">
            <h2 className="profile-name">{name}</h2>
            <p className="profile-email">{email}</p>
            <p className="profile-username">{username}</p>
        </div>
    );
}

Profile.propTypes = {
    user: propTypes.shape ({
        name: propTypes.string.isRequired,
        email: propTypes.string.isRequired,
        username: propTypes.string.isRequired,
    }).isRequired
}
export default Profile;