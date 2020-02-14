import React from "react";
import Header from './WriterComponents/WriterHeader'
import About from "./DeveloperComponents/About"
import Experience from "./DeveloperComponents/Experience"
import Education from "./DeveloperComponents/Education"
import Skills from "./DeveloperComponents/Skills"
import Interests from "./DeveloperComponents/Interests"
import Awards from "./DeveloperComponents/Awards"

class Writer extends React.Component {

    render() {
        console.log("writer attempted: " + this.props.developer)
        return (
            <div className="container-fluid p-0" >
                <Header changeCareerHandler={this.props.changeCareerHandler} />
                <About />
                <hr className="m-0"></hr>
                <Experience />
                <hr className="m-0"></hr>
                <Education />
                <hr className="m-0"></hr>
                <Skills />
                <hr className="m-0"></hr>
                <Interests />
                <hr className="m-0"></hr>
                <Awards />
            </div>
        );
    }
}

export default Writer;