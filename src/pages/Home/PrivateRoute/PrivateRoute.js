import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const PrivateRoute = ({children, ...rest}) => {

    const { user } = useAuth();
    const location = useLocation();

    // if (isLoading) {
    //     return<Spinner animation="border" role="status">
    //     <span className="visually-hidden">Loading...</span>
    //     </Spinner>
    // }

    if (user?.email) {
        return children;
    }

    return (
        <div>
            <Navigate to="/login" state={{from: location}}  />
        </div>
    );
};

export default PrivateRoute;