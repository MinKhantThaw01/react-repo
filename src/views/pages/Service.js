import React, { useEffect } from 'react';
import Img from '../../assets/img/metaimg.png';
import Home_img from "../../assets/img/story.jpg";
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { NavLink } from 'react-bootstrap';
import ScrollReveal from 'scrollreveal';
import { Helmet } from 'react-helmet';


const Service = () => {
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
                <title>Services | Repo Hub</title>
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
            <div className="container ">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <section className='container my-5'>
                            <div className="row">
                                <div className="col-12 ">
                                    <div className='my-5 '>
                                        <h3 className=' fw-light headline bookBold headline'>Our Services</h3>
                                        <h3 className='mb-5 headline headline'>Our Services extend to every aspect of the project development process</h3>
                                        <img className='img-fluid w-100 object-fit-cover headline pdf-rounded-xl headline' style={{ height: "500px" }} src={Home_img} alt="" />
                                    </div>
                                </div>

                            </div>

                        </section>
                    </div>
                </div>
            </div>
            <div className="border-bottom">
                <div className="container">

                    <div className="row justify-content-center g-5 ">
                        <div className="col-lg-5 col-12">
                            <div className="">
                                <h3 className='bookBold text-md-center headline'>Research & Analytics</h3>
                                <p className=' headline'>We immerse ourselves in the anyalytics of your bussiness, in order to study all the subtitles and determine target audience.</p>
                            </div>
                            <div className="py-5 headline">
                                <h3 className='text-md-center text-center'>What we do</h3>
                                <div className="d-flex gap-5 justify-content-md-center">
                                    <div className="">
                                        <p>- Analyze client bussiness</p>
                                        <p>- Branding Strategy</p>
                                        <p>- Research Opportunities</p>
                                    </div>
                                    <div className="">
                                        <p>- Create information architecture</p>
                                        <p>- Study thet target audience</p>
                                        <p>- Production planning</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col d-flex align-items-center mt-0 ">
                            <img src="https://images.unsplash.com/photo-1672671246846-2efd7789f913?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60" className='img-fluid rounded pdf-rounded-xl overflow-hidden border-0 shadow-xl shadow-blue-100 headline' alt="" />
                        </div>

                    </div>
                </div>

            </div>
            <div className="border-bottom my-5">
                <div className="container">

                    <div className="row justify-content-center g-5">
                        <div className="col-lg-5 col-12">
                            <div className="">
                                <h3 className='bookBold text-md-center headline'>Research & Analytics</h3>
                                <p className=' headline'>We know how to create complex and intuitive interface systems that are enjoyable to use.</p>
                            </div>
                            <div className="py-5 headline">
                                <h3 className='text-md-center text-center' >What we do</h3>
                                <div className="d-flex gap-5 justify-content-md-center">
                                    <div className="">
                                        <p>- Analyze client bussiness</p>
                                        <p>- Branding Strategy</p>
                                        <p>- Research Opportunities</p>
                                    </div>
                                    <div className="">
                                        <p>- UI Kits & Library</p>
                                        <p>- E-commerce</p>
                                        <p>- Apps for IOS and Android</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col d-flex align-items-center mt-0">
                            <img src="https://images.unsplash.com/photo-1672651158520-e2ee88dfd552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60" className='img-fluid rounded pdf-rounded-xl overflow-hidden border-0 shadow-xl shadow-blue-100 headline' alt="" />
                        </div>

                    </div>
                </div>

            </div>
            <div className="border-bottom my-5">
                <div className="container">

                    <div className="row justify-content-center g-5">
                        <div className="col-lg-5 col-12 ">
                            <div className="">
                                <h3 className='bookBold text-md-center headline'>Development & Integration</h3>
                                <p className=' headline'>Our development team easily subdue developments of any complexity.We dominate all the cycle of development.</p>
                            </div>
                            <div className="py-5 headline">
                                <h3 className='text-md-center text-center'>What we do</h3>
                                <div className="d-flex gap-5 justify-content-md-center">
                                    <div className="">
                                        <p>- Interface Design</p>
                                        <p>- Visual Identify</p>
                                        <p>- Coporate and Promo landing</p>
                                    </div>
                                    <div className="">
                                        <p>- UI Kits & Library</p>
                                        <p>- E-commerce</p>
                                        <p>- Apps for IOS and Android</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12 d-flex align-items-center mt-0 ">
                            <img src="https://plus.unsplash.com/premium_photo-1663126351065-741a1d338b5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60" className='img-fluid rounded pdf-rounded-xl overflow-hidden border-0 shadow-xl shadow-blue-100 headline' alt="" />
                        </div>

                    </div>
                </div>

            </div>

            <div className="" >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <section className='container '>
                                <div className="row">
                                    <div className="col ">
                                        <Link to="/contact" className='text-decoration-none text-black'>
                                            <div className=" text-center my-5 py-5 headline">
                                                <p>NEXT</p>
                                                <h4 className='bold'>Our Contact</h4>
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
    );
}

export default Service;
