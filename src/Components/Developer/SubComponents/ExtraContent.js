import React from "react"

function ExtraContent(props) {

    return <div>
        <hr className="m-5"></hr><div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-0">
            <div className="resume-content">
                <h3 className="mb-0">{props.data.title}</h3>
                <div className="subheading mb-3">{props.data.descOne}</div>
                <p>{props.data.descTwo}</p>
            </div>
        </div>
    </div>
}

export default ExtraContent