import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { FaList, FaRegEdit, FaDollarSign, FaUserAlt, FaUserSecret, FaRegSun, FaRegCalendarPlus, FaRegCalendarAlt, FaWindowRestore, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Dashboard = () => {

    const { user, admin, logOut } = useAuth();
    // let { path, url } = useRouteMatch();



    return (
        <Container fluid className="mx-3 my-5 py-5 text-light">
        <Row className='justify-content-center align-items-center'>
           
                <div className="col-md-3 neumophorism h-100">
                    {/* user */}
                <div className="mx-5 py-3 d-flex flex-column " style={{textAlign:'justify'}}>
                        <h3 className="text-center py-5">{user?.displayName} Panel</h3>
                        
                        <Link className="fs-5 text-light text-decoration-none" to="/dashboard/myorder"><FaList className="mx-2 fs-5" /> Bookings</Link> <br />
                        
                        <Link className="fs-5 text-light text-decoration-none" to="/dashboard/review"> <FaRegEdit className="mx-2 fs-5" /> Review</Link>  <br />
                        
                        <Link className="fs-5 text-light text-decoration-none" to="/dashboard/payment/:id"> <FaDollarSign className="mx-2 fs-5" /> Pay</Link>  <br />
                        
                        <Link className="fs-5 text-light text-decoration-none" to=""> <FaUserAlt className="mx-2 fs-5" /> Profile</Link>   <br />

                        <Link className="fs-5 text-light text-decoration-none" to=""> <FaRegSun className="fs-5 mx-2" /> Settings</Link>  <br />
                        
                    <Link className="fs-5 text-light text-decoration-none" onClick={logOut} to=""> <FaSignOutAlt className=" mx-2 fs-5" /> Logout</Link> <br />

                    </div>
                    

                {/* Adimin */}
                <div className="mx-5 py-3 d-flex flex-column " style={{textAlign:'justify'}}>
                    <h3 className="text-center text-xl py-5">{user?.displayName} Panel</h3>
                        <Link className=" fs-5 text-light text-decoration-none" to="/dashboard/addEvents"><FaRegEdit className="mx-2 fs-5" /> Add Events</Link> <br />
                        
                        <Link className=" fs-5 text-light text-decoration-none" to="/dashboard/makeAdmin"> <FaUserSecret className="mx-2 fs-5" /> Make Admin</Link> <br />
                        
                        <Link className=" fs-5 text-light text-decoration-none" to="/dashboard/AllUsers"> <FaRegSun className="mx-2 fs-5" /> Manage All users </Link> <br />
                        
                        <Link className=" fs-5 text-light text-decoration-none" to="/dashboard/AllEvents"> <FaRegCalendarPlus className="mx-2 fs-5" /> Manage All Event </Link> <br />

                        <Link className=" fs-5 text-light text-decoration-none" to="/dashboard/ManageAllOrder"> <FaRegCalendarAlt className="mx-2 fs-5" /> Manage All Order </Link> <br />
             
                    <Link className=" fs-5 text-light text-decoration-none" to=""> <FaWindowRestore className="mx-2fs-5" /> Settings</Link> <br />
                    
                    <Link className="fs-5 text-light text-decoration-none" onClick={logOut} to=""> <FaSignOutAlt className="mx-2 fs-5" /> Logout</Link>

                    </div>


        </div>
            <div className="col-md-9">
               
                    <h3 className="my-5"> Welcome Mr. Dashbord </h3> <br />
                    
                 <Outlet />
           </div>
        </Row>
    </Container>
    );
};

export default Dashboard;