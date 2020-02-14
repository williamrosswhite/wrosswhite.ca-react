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
        return (
            <div className="container-fluid p-0" >
                <Header changeCareerHandler={this.props.changeCareerHandler} />
                <Skills />
                <hr className="m-0"></hr>
                <Interests />
                <hr className="m-0"></hr>
                <Awards />
                }
            </div>
        );
    }
}

export default Developer;