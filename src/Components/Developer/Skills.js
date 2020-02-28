import React from "react";
import text from '../../text/strings.json'

class Skills extends React.Component {

    render() {
        return (
            <div className="container-fluid p-0">

                <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
                    <div className="w-100">
                        <h2 className="mb-5 spacer text-primary">{text.headers.skills}</h2>

                        <hr className="m-5"></hr>

                        {/* Ross this should all be interpolated */}

                        <div className="subheading mb-3">{text.skills.skills}</div>
                        <ul className="fa-ul mb-4 mr-5">
                            <li>
                                <i className="ml-5 fa-li fa fa-check skillCheck"></i>
                                {text.skills.languages.js}</li>
                            <li>
                                <i className="ml-5 fa-li fa fa-check"></i>
                                {text.skills.languages.dotnet}</li>
                            <li>
                                <i className="ml-5 fa-li fa fa-check"></i>
                                {text.skills.languages.sql}</li>
                            <li>
                                <i className="ml-5 fa-li fa fa-check"></i>
                                {text.skills.languages.java}</li>
                            <li>
                                <i className="ml-5 fa-li fa fa-check"></i>
                                {text.skills.languages.c}</li>
                            <li>
                                <i className="ml-5 fa-li fa fa-check"></i>
                                {text.skills.languages.go}</li>
                            <li>
                                <i className="ml-5 fa-li fa fa-check"></i>
                                {text.skills.languages.gql}</li>
                        </ul>
                        <ul className="list-inline dev-icons">
                            <li className="list-inline-item">
                                <i className="fab fa-html5"></i>
                            </li>
                            <li className="list-inline-item">
                                <i className="fab fa-css3-alt"></i>
                            </li>
                            <li className="list-inline-item">
                                <i className="fab fa-react"></i>
                            </li>
                            <li className="list-inline-item">
                                <i className="fab fa-npm"></i>
                            </li>
                            <li className="list-inline-item">
                                <i className="fab fa-github"></i>
                            </li>
                        </ul>

                        <ul className="fa-ul mb-0">
                            <li>
                                <i className="fa-li fa fa-check"></i>
                                {text.skills.stack}</li>
                            <li>
                                <i className="fa-li fa fa-check"></i>
                                {text.skills.mobile}</li>
                            <li>
                                <i className="fa-li fa fa-check"></i>
                                {text.skills.cross}</li>
                            <li>
                                <i className="fa-li fa fa-check"></i>
                                {text.skills.agile}</li>
                            <li>
                                <i className="fa-li fa fa-check"></i>
                                {text.skills.oop}</li>
                            <li>
                                <i className="fa-li fa fa-check"></i>
                                {text.skills.comms}</li>
                            <li>
                                <i className="fa-li fa fa-check"></i>
                                {text.skills.organized}</li>
                            <li>
                                <i className="fa-li fa fa-check"></i>
                                {text.skills.collaborator}</li>
                        </ul>

                        <hr className="my-4"></hr>
                        <div className="subheading mb-3">{text.skills.more}</div>
                        <p className="lead">{text.skills.zero}
                            <br></br><br></br>{text.skills.one}</p>
                        <hr className="my-4"></hr>
                        <p className="lead">{text.skills.two}</p>
                        <hr className="my-4"></hr>
                        <p className="lead">{text.skills.three}
                            <br></br><br></br>{text.skills.four}
                            <br></br><br></br>{text.skills.five}</p>
                        <hr className="my-4"></hr>
                        <p className="lead">{text.skills.six}</p>

                    </div>
                </section>
            </div>
        );
    }
}

export default Skills;