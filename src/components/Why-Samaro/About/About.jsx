import React from 'react'
import "./About.css"
const About = () => {
    return (
        <section className='bg-navy py-5'>
            <div className="container">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-4">
                            <p className='text-white text-end'>
                                The beautiful <span className='fw-bold'>
                                    JOURNEY
                                </span> of
                            </p>
                            <img src="/assets/images/logo/main-logo.png" alt="" />
                        </div>
                        <div className="col-lg-8"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About