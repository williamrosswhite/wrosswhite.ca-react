import React from "react";
import Header from './DeveloperComponents/DeveloperHeader'
import About from "./DeveloperComponents/About"
import Experience from "./DeveloperComponents/Experience"
import Education from "./DeveloperComponents/Education"
import Skills from "./DeveloperComponents/Skills"
import Interests from "./DeveloperComponents/Interests"
import Awards from "./DeveloperComponents/Awards"

class Developer extends React.Component {

    render() {
        let x = this.props.developer;
        console.log("writer attempted:" + x)
        return (
            <div className="container-fluid p-0" >
                {(this.props.developer) ?
                    <div>
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
                    </div> :
                    <div></div>
                }
            </div>
        );
    }
}

export default Developer;