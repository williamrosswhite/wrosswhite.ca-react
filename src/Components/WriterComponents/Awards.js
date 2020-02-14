import React from "react";

class FluidContainer extends React.Component {

    render() {
        return (
            <div className="container-fluid p-0">
                <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="awards">
                    <div className="w-100">
                        <h2 className="mb-5">Awards &amp; Certifications</h2>
                        <ul className="fa-ul mb-0">
                            <li>
                                <i className="fa-li fa fa-trophy text-warning"></i>
                                Google Analytics Certified Developer</li>
                            <li>
                                <i className="fa-li fa fa-trophy text-warning"></i>
                                Mobile Web Specialist - Google Certification</li>
                            <li>
                                <i className="fa-li fa fa-trophy text-warning"></i>
                                1<sup>st</sup>
                                Place - University of Colorado Boulder - Emerging Tech Competition 2009</li>
                            <li>
                                <i className="fa-li fa fa-trophy text-warning"></i>
                                1<sup>st</sup>
                                Place - University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category)</li>
                            <li>
                                <i className="fa-li fa fa-trophy text-warning"></i>
                                2<sup>nd</sup>
                                Place - University of Colorado Boulder - Emerging Tech Competition 2008</li>
                            <li>
                                <i className="fa-li fa fa-trophy text-warning"></i>
                                1<sup>st</sup>
                                Place - James Buchanan High School - Hackathon 2006</li>
                            <li>
                                <i className="fa-li fa fa-trophy text-warning"></i>
                                3<sup>rd</sup>
                                Place - James Buchanan High School - Hackathon 2005</li>
                        </ul>
                    </div>
                </section>
            </div>
        );
    }
}

export default FluidContainer;