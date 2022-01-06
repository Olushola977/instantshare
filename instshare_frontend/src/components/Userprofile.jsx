import React, { useState, useEffect } from 'react';
import { AiOutlineLogout } from 'react-icons/ai';
import { useParams, useNavigate } from 'react-router-dom';
import { GoogleLogout } from 'react-google-login';
import { userCreatedPinsQuery, userQuery, userSavedPinsQuery } from '../utils/data';

const Userprofile = () => {
    return (
        <div>
            User Profile
        </div>
    )
}

export default Userprofile
