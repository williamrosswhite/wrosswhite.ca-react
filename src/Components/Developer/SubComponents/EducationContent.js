import React from "react"

function EducationContent(props) {
    console.log(props)

    return <div>
        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-0">
            <hr className="m-5"></hr>
            <div className="resume-content">
                <h3 className="mb-0">{props.data.name}</h3>
                <div className="subheading mb-2">{props.data.degree}</div>
                <div className="mb-3">{props.data.focus}</div>
            </div>
            <div className="resume-date text-md-right">
                <span className="text-primary">{props.data.date}</span>
            </div>
        </div>
    </div>
}

export default EducationContent