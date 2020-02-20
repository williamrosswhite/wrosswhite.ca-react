import React from "react";
import text from "../../text/strings.json"
import EducationContent from "./SubComponents/EducationContent.js";
import educationData from '../../text/education-text'

class Education extends React.Component {

    render() {

        const edu = educationData.map(item => <EducationContent key={item.id} data={item} />)
        
        return (
            <div className="container-fluid p-0">
                <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
                    <div className="w-100">
                        <h2 className="mb-0 spacer text-primary">{text.headers.education}</h2>
                        {edu}
                    </div>
                </section>
            </div>
        );
    }
}

export default Education;