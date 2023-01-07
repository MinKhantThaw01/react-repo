import React, { useState } from 'react';
import '../../assets/css/Cus.css';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {

    const [open, setOpen] = useState(false);

    const menu = () => {
        setOpen(!open);
    }
    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10 ">
                        <nav className="navbar navbar-expand-lg bg-body-tertiary z-1000">
                            <div className="container z-1000">


                                <a className="navbar-brand" href=" ">Repo Hub</a>
                                <div className={`${open ? "show" : ''} menu-icon`} onClick={menu} data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
                                    <span></span>
                                    <span></span>
                                </div>



                            </div>
                        </nav>
                    </div>
                </div>
            </div>



            <div className="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                <div className="offcanvas-header">


                </div>
                <div className="container-fluid bg-none px-0">
                    <div className="offcanvas-body  mt-3 bg-light">
                        <div className=''>
                            <ul className='list-group list-group-flush  bg-light'>
                                <li className='list-group-item border-0 ms-lg-5 ps-lg-5 bg-light'><NavLink to="/" className={({ isActive }) => isActive ? "text-danger h5 text-decoration-none ps-lg-5" : "h5 text-decoration-none ps-lg-5"}>Home</NavLink></li>
                                <li className='list-group-item border-0 ms-lg-5 ps-lg-5 bg-light'><NavLink to="/story" className={({ isActive }) => isActive ? "text-danger h5 text-decoration-none ps-lg-5" : "h5 text-decoration-none ps-lg-5"}>Story</NavLink></li>
                                <li className='list-group-item border-0 ms-lg-5 ps-lg-5 bg-light'><NavLink to="/contact" className={({ isActive }) => isActive ? "text-danger h5 text-decoration-none ps-lg-5" : "h5 text-decoration-none ps-lg-5"}>Contact</NavLink></li>
                                <li className='list-group-item border-0 ms-lg-5 ps-lg-5 bg-light'><NavLink to="/service" className={({ isActive }) => isActive ? "text-danger h5 text-decoration-none ps-lg-5" : "h5 text-decoration-none ps-lg-5"}>Service</NavLink></li>

                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default NavBar;
