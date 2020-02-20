import React from "react";
import text from '../../text/strings.json'
import ProjectContent from './SubComponents/ProjectContent'
import projectData from '../../text/project-text'

class Projects extends React.Component {

    render() {

        const proj = projectData.map(item => <ProjectContent key="id" data={item}/>)

        return (
            <div className="container-fluid p-0">
                <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="projects">
                    <div className="w-100">
                        <h2 className="mb-0 spacer text-primary">{text.headers.projects}</h2>
                        {proj}
                    </div>
                </section>
            </div>
        );
    }
}

export default Projects;