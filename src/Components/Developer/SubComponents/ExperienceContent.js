import React from "react"

function ExperienceContent(props) {
    console.log(props)

    return <div>
        <hr className="m-5"></hr>
        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-0">
            <div className="resume-content">
                <h3 className="mb-0">{props.data.name}</h3>
                <div className="subheading mb-2">{props.data.title}</div>
                <div className="mb-3">{props.data.sector}</div>
            </div>
            <div className="resume-date text-md-right">
                <span className="text-primary">{props.data.date}</span>
            </div>
        </div>
        <ul className="mb-4 mr-5">
            <li>
                {props.data.bullets.zero}</li>
            <li>
                {props.data.bullets.one}</li>
            <li>
                {props.data.bullets.two}</li>
            <li>
                {props.data.bullets.three}</li>
        </ul>
    </div>
}

export default ExperienceContent