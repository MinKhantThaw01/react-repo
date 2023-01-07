import React, { useEffect } from 'react';
import Home_img from '../../assets/img/home.jpg';
import { AiFillCaretRight } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';
import { NavLink } from 'react-bootstrap';
import ScrollReveal from 'scrollreveal';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Img from '../../assets/img/metaimg.jpg';
const Home = () => {

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

    const Work = [

        { id: 1, src: Home_img, subtitle: "Sport Books", desc: "Rewind" },
        { id: 2, src: Home_img, subtitle: "Sport Books", desc: "Rewind" },
        { id: 3, src: Home_img, subtitle: "Sport Books", desc: "Rewind" },
        { id: 4, src: Home_img, subtitle: "Sport Books", desc: "Rewind" },
        { id: 5, src: Home_img, subtitle: "Sport Books", desc: "Rewind" },
        { id: 6, src: Home_img, subtitle: "Sport Books", desc: "Rewind" },

    ]

    const Services = [
        { id: 1, src: 'https://images.unsplash.com/photo-1672671246846-2efd7789f913?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60', title: "Care and Health" },
        { id: 2, src: ' https://images.unsplash.com/photo-1672651158520-e2ee88dfd552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60', title: "Care and Health" },
        { id: 3, src: 'https://plus.unsplash.com/premium_photo-1663126351065-741a1d338b5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60', title: "Care and Health" },
        { id: 4, src: 'https://images.unsplash.com/photo-1671726203449-34e89df45211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60', title: "Care and Health" },


    ]

    return (
        <div>

            <Helmet>


                <title>Repo Hub</title>
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

            {/* Home Section */}

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <section className='container'>
                            <div className="row">
                                <div className="col-12 ">
                                    <div className='my-5 '>
                                        <h3 className=' fw-light headline bookBold'>Digital Agency</h3>
                                        <h3 className='mb-5 headline'>We develop complex interfaces systems for Web,Mobile and Ar</h3>
                                        <img className='img-fluid w-100 object-fit-cover headline pdf-rounded-xl' style={{ height: "500px" }} src={Home_img} alt="" />
                                    </div>
                                </div>
                            </div>

                        </section>
                    </div>
                </div>
            </div>


            {/* Work Section */}
            <div className="bg-light">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <section className='container '>
                                <div className="row">
                                    <div className="col-12">
                                        <div className='my-5 '>
                                            <h3 className=' text-center py-md-4  headline'>Our Select Work Projects</h3>
                                            <div className="row row-cols-1 row-cols-lg-2 g-4">
                                                {Work.map((x) => (
                                                    <div className="col col-md-6 headline " key={x.id}>
                                                        <div className="card rounded pdf-rounded-xl overflow-hidden border-0 shadow-xl shadow-blue-100" >
                                                            <img src={x.src} className="card-img-top" alt="..." />
                                                            <div className="card-body">
                                                                <h5 className="card-title bold">{x.subtitle}</h5>
                                                                <p className='text-secondary'>{x.desc}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>

            {/* Service Section*/}
            <div className="bg-light">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <section className='container '>
                                <div className="row my-4">
                                    <div className="col-lg-6 my-md-3">
                                        <h4 className='text-center headline bookBold'>Our Services</h4>
                                    </div>
                                    <div className="col-lg-6 headline">
                                        <p className='text-secondary'>As a strategic partner,we create a working product with a thoughtful and large-scale architecture. We lauch ,support and developmemnt.</p>
                                    </div>

                                </div>
                                <div className="row my-4 g-5">
                                    {Services.map((service) => (
                                        <div className="col-md-6 col-lg-3  headline " key={service.id}>
                                            <div className="card border-0 shadow-xl shadow-blue-100" >
                                                <img src={service.src} style={{ height: '200px' }} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">{service.title}</h5>

                                                </div>
                                            </div>

                                        </div>
                                    ))}
                                    <div className="my-4 text-end">
                                        <span>Explore More </span>
                                        <AiFillCaretRight />
                                    </div>

                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div >


            {/*Story Section  */}
            < div className="" >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <section className='container '>
                                <div className="row">
                                    <div className="col ">
                                        <Link to="/story" className='text-decoration-none text-black'>
                                            <div className=" text-center my-5 py-5 headline">
                                                <p>NEXT</p>
                                                <h4 className='bold'>Our Story</h4>
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
        </div >
    );
}

export default Home;
