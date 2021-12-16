import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { FaList, FaRegEdit, FaDollarSign, FaUserAlt, FaUserSecret, FaRegSun, FaRegCalendarPlus, FaRegCalendarAlt, FaWindowRestore, FaSignOutAlt } from 'react-icons/fa';

const Dashboard = () => {

    // const { users, admin, logoutUsers } = useAuth();
    // let { path, url } = useRouteMatch();

    return (
        <Container className="my-5 py-5">
        <Row>
            <div className="col-md-3 dashboard_item" style={{ textAlign: 'right' }}>
                
               <h3>Panel</h3>
            </div>
            <div className="col-md-9">
               
                <h3 className="my-5"> Welcome Mr. Dashbord </h3> <br />
                 
           </div>
        </Row>
    </Container>
    );
};

export default Dashboard;