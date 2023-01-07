import React, { useEffect } from 'react';
import Home_img from "../../assets/img/story.jpg";
import { NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import ScrollReveal from 'scrollreveal';
import { Helmet } from 'react-helmet';
import Img from '../../assets/img/metaimg.png';

const Story = () => {
    useEffect(() => {
        ScrollReveal().reveal(".headline", {
            origin: "bottom",
            distance: "40px",
            reset: true,
            duration: 1200,
            interval: 200,
            scale: 0.9,
            viewFactor: 0.1,
        });
    }, []);
    return (

        <div>
            <Helmet>
                <title>Story | Repo Hub</title>
                <meta name="title" content="Repo Hub" />
                <meta name="description" content="React Practise" />


                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://metatags.io/" />
                <meta property="og:title" content="Repo Hub" />
                <meta property="og:description" content="React Practise" />
                <meta property="og:image" content={Img} />

                <meta proprty="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://metatags.io/" />
                <meta property="twitter:title" content="Repo Hub" />
                <meta property="twitter:description" content="React Practise" />
                <meta property="twitter:image" content={Img} />

            </Helmet>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <section className='container'>
                            <div className="row">
                                <div className="col-12 ">
                                    <div className='my-5 '>
                                        <h3 className=' fw-light headline bookBold '>Our Story</h3>
                                        <h3 className='mb-5 headline '>We develop complex interfaces systems for Web,Mobile and Ar</h3>
                                        <img className='img-fluid w-100 object-fit-cover headline pdf-rounded-xl' style={{ height: "500px" }} src={Home_img} alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className='d-flex justify-content-start g-3' >
                                        <div className="d-flex flex-column me-5 headline">
                                            <h2 className='fw-bold'>20</h2>
                                            <span>Employers</span>
                                        </div>
                                        <div className="d-flex flex-column headline">
                                            <h2 className='fw-bold'>5</h2>
                                            <span>Years of Experiences</span>
                                        </div>

                                    </div>

                                </div>
                            </div>

                        </section>
                    </div>
                </div>


                < div className="" >
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <section className='container '>
                                    <div className="row">
                                        <div className="col ">
                                            <Link to="/service" className='text-decoration-none text-black'>
                                                <div className=" text-center my-5 py-5 headline">
                                                    <p>NEXT</p>
                                                    <h4 className='bold'>Our Services</h4>
                                                    <BsArrowRight className='text-secondary' />
                                                </div>
                                            </Link>

                                        </div>
                                    </div>


                                </section>
                            </div>
                        </div>
                    </div>
                </div >


                {/* Footer */}
                < div className="border-top py-5" >
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <section className='container '>
                                    <div className="row ">
                                        <div className="col headline">
                                            <div className="d-flex">
                                                <NavLink to="/" className='text-decoration-none text-secondary me-3' >Home</NavLink>
                                                <NavLink to="/" className='text-decoration-none text-secondary me-3' >Story</NavLink>
                                                <NavLink to="/" className='text-decoration-none text-secondary me-3' >Work</NavLink>

                                                <NavLink to="/" className='text-decoration-none text-secondary ms-3 d-block d-lg-none' >Careers</NavLink>
                                                <NavLink to="/" className='text-decoration-none text-secondary ms-3 d-block d-lg-none' >Services</NavLink>
                                            </div>
                                        </div>
                                        <div className="col my-3 my-lg-0 headline">
                                            <div className="text-center">
                                                <h4>Repo Hub</h4>
                                            </div>
                                        </div>
                                        <div className="col d-none d-lg-block headline">
                                            <div className="d-flex justify-content-end">
                                                <NavLink to="/" className='text-decoration-none text-secondary ms-3' >Careers</NavLink>
                                                <NavLink to="/" className='text-decoration-none text-secondary ms-3' >Services</NavLink>

                                            </div>
                                        </div>
                                    </div>


                                </section>
                            </div>
                        </div>
                    </div>
                </div >
            </div>


        </div>
    );
}

export default Story;
