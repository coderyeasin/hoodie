import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { FaList, FaRegEdit, FaDollarSign, FaUserAlt, FaUserSecret, FaRegSun, FaRegCalendarPlus, FaRegCalendarAlt, FaWindowRestore, FaSignOutAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import AddHoodie from '../Admin/AddHoodie';
import MyOrder from '../User/MyOrder';

const Dashboard = () => {

    const { user, admin, logOut } = useAuth();
    const navigate = useNavigate();
    

    return (
        <Container fluid className=" my-5 py-5 text-light">
        <Row className='justify-content-center align-items-center mx-3'>
           
          
                    <div className="col-md-3 neumophorism h-100">
                    {!admin ?
                        <div className="mx-5 py-3 d-flex flex-column " style={{ textAlign: 'justify' }}>
                            <h3 className="text-center py-5">{user?.displayName} Panel</h3>
                        
                            <Link className="fs-5 text-light text-decoration-none" to="/dashboard/myorder"><FaList className="mx-2 fs-5" /> Bookings</Link> <br />
                        
                            <Link className="fs-5 text-light text-decoration-none" to="/dashboard/feedback"> <FaRegEdit className="mx-2 fs-5" /> Review</Link>  <br />
                        
                            <Link className="fs-5 text-light text-decoration-none" to="/dashboard/payment"> <FaDollarSign className="mx-2 fs-5" /> Payment</Link>  <br />
                        
                            <Link className="fs-5 text-light text-decoration-none" to=""> <FaUserAlt className="mx-2 fs-5" /> Profile</Link>   <br />

                            <Link className="fs-5 text-light text-decoration-none" to=""> <FaRegSun className="mx-2 fs-5 " /> Settings</Link>  <br />
                        
                            <Link className="fs-5 text-light text-decoration-none mb-3" onClick={() => logOut(navigate)} to=""> <FaSignOutAlt className=" mx-2 fs-5" /> Logout</Link> <br />

                        </div>
                    
                        :
                
                        <div className="mx-5 py-3 d-flex flex-column " style={{ textAlign: 'justify' }}>
                            <h3 className="text-center text-xl py-5">{user?.displayName} Panel</h3>
                            <Link className=" fs-5 text-light text-decoration-none" to="/dashboard/addhoodie"><FaRegEdit className="mx-2 fs-5" /> Add Hoodie</Link> <br />
                        
                            <Link className=" fs-5 text-light text-decoration-none" to="/dashboard/makeAdmin"> <FaUserSecret className="mx-2 fs-5" /> Make Admin</Link> <br />
                        
                            <Link className=" fs-5 text-light text-decoration-none" to="/dashboard/allUsers"> <FaWindowRestore className="mx-2 fs-5" /> Manage All users </Link> <br />
                        
                            <Link className=" fs-5 text-light text-decoration-none" to="/dashboard/allHoodies"> <FaRegCalendarPlus className="mx-2 fs-5" /> Manage All Hoodie </Link> <br />

                            <Link className=" fs-5 text-light text-decoration-none" to="/dashboard/allOrders"> <FaRegCalendarAlt className="mx-2 fs-5" /> Manage All Orders </Link> <br />
             
                            <Link className=" fs-5 text-light text-decoration-none" to=""> <FaRegSun className="mx-2 fs-5" /> Settings</Link> <br />
                    
                            <Link className="fs-5 text-light text-decoration-none mb-3" onClick={logOut} to=""> <FaSignOutAlt className="mx-2 fs-5" /> Logout</Link>

                        </div>
                    }
                </div>
                
            <div className="col-md-9">
               
                    <h3 className="my-3"> Welcome Mr. {user?.email ? user?.displayName : "Dashboard"} </h3> 

                    
                 <Outlet />
           </div>
        </Row>
    </Container>
    );
};

export default Dashboard;