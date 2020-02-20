import React from "react"

function EducationContent(props) {

    return <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-0">
        <hr className="m-5"></hr>
        <div className="resume-content">
            <h3 className="mb-0">{props.data.name}</h3>
            <div className="subheading mb-3">{props.data.tech}</div>
            <p>{props.data.descOne}</p>
            <p>{props.data.descTwo}</p>
            <p>{props.data.deploy}</p>
            <p>{props.data.repo}</p>
        </div>
        <div className="resume-date text-md-right">
            <span className="text-primary">{props.data.year}</span>
        </div>
    </div>
}

export default EducationContent