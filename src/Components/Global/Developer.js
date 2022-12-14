import React from "react";
import About from "../Developer/About"
import Education from "../Developer/Education"
import Skills from "../Developer/Skills"
import Projects from "../Developer/Projects"
import Extracurricular from "../Developer/Extras"
import 'bootstrap/dist/css/bootstrap.min.css';
import Experience from "../Developer/Experience";

class Developer extends React.Component {

    render() {
        return (
            <div className="container-fluid p-0" >
                <About />
                <Experience />
                <Education />
                <Skills />
                <Projects />
                <Extracurricular />
            </div>
        );
    }
}

export default Developer;