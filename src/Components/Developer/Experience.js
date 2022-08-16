import React from "react";
import text from "../../text/strings.json"
import ExperienceContent from "./SubComponents/ExperienceContent.js";
import experienceData from '../../text/experience-text'

class Experience extends React.Component {

    render() {

        const edu = experienceData.map(item => <ExperienceContent key={item.id} data={item} />)

        return (
            <div className="container-fluid p-0">
                <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="experience">
                    <div className="w-100">
                        <h2 className="mb-0 spacer text-primary">{text.headers.experience}</h2>
                        {edu}
                    </div>
                </section>
            </div>
        );
    }
}

export default Experience;