import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const DisplayError = () => {
    const { logOut } = useContext(AuthContext)
    const navigate = useNavigate()
    const error = useRouteError()
    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/login')
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <p className="text-red-500">Something went wrong</p>
            <p className="text-red-400">{error.statusText || error.message}</p>
            <h4 className="text-3xl">Please <button onClick={handleLogOut}>Sign Out</button> and log back in</h4>
        </div>
    );
};

export default DisplayError;