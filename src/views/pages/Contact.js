import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import ScrollReveal from 'scrollreveal';
import Img from '../../assets/img/metaimg.png';
import { AiOutlineArrowRight } from "react-icons/ai";
import { Helmet } from 'react-helmet';
const Contact = () => {

    const [state, setState] = useState("");
    const [secstate, setSecstate] = useState('');
    const [laststate, setLaststate] = useState('');
    const [action, setAction] = useState(false);
    const [secaction, setSecAction] = useState(false);
    const [lastaction, setLastAction] = useState(false);

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

    useEffect(() => {
        if (state === ' ') return;
        if (!(state === '')) {
            return setAction(true);
        }
        return setAction(false);
    }, [state]);
    useEffect(() => {
        if (secstate === ' ') return;
        if (!(secstate === '')) {
            return setSecAction(true);
        }
        return setSecAction(false);
    }, [secstate]);
    useEffect(() => {
        if (laststate === ' ') return;
        if (!(laststate === '')) {
            return setLastAction(true);
        }
        return setLastAction(false);
    }, [laststate]);


    return (
        <div>
            <Helmet>
                <title>Contact | Repo Hub</title>
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
                                <div className="col-10 ">
                                    <div className='my-5 '>
                                        <h3 className=' fw-light headline bookBold headline' >What's up !</h3>
                                        <h4 className='mb-5 headline headline'>We are Here for You to Help, Drop some information</h4>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-sm-10 p-0 ">
                                    <form action="" className='form-group'>
                                        <div className="d-flex align-items-center headline">
                                            <input type="text" className='border-0 border-bottom form-control my-4 me-3 ' placeholder="New Bussiness" onChange={(e) => setState(e.target.value)} /><AiOutlineArrowRight style={action ? { color: "red" } : ''} className="fs-5 fw-bolder " />
                                        </div>
                                        <div className="d-flex align-items-center headline">
                                            <input type="text" className='border-0 border-bottom form-control my-4 me-3 ' onChange={(e) => setSecstate(e.target.value)} placeholder="Send a message" /><AiOutlineArrowRight style={secaction ? { color: "red" } : ''} className="fs-5 fw-bolder " />
                                        </div>
                                        <div className="d-flex align-items-center headline">
                                            <input type="text" className='border-0 border-bottom form-control my-4 me-3 ' onChange={(e) => setLaststate(e.target.value)} placeholder="Carrers" /><AiOutlineArrowRight style={lastaction ? { color: "red" } : ''} className="fs-5 fw-bolder " />
                                        </div>

                                    </form>
                                </div>

                            </div>

                        </section>
                    </div>
                    {/* Footer */}
                    <div className="col-lg-10 my-5">
                        <div className="container">
                            <div className="">
                                <div className="row ">
                                    <div className="col-6 col-lg-3 headline">
                                        <div className="text-center ">
                                            <span className=''>General inquiries </span>
                                            <div className=" ">
                                                <h3 className='fw-bold'>Quick chat</h3>
                                                <p><FontAwesomeIcon icon={faFacebookMessenger} className="me-2" />Message on Facebook</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-lg-3 headline">
                                        <div className="text-center text-lg-start">
                                            <span className='text-secondary'>New bussiness </span>
                                            <div className="">
                                                <h3 className='fw-bold'>hi@kris.co</h3>
                                                <p>+95912345678</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-3 headline">
                                        <div className="text-center text-lg-start">
                                            <span className='text-secondary'>Office</span>
                                            <div className="">
                                                <h3 className='fw-bold'>Yangon</h3>
                                                <p>Yangon,Myanmar</p>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Contact;
