import React from "react"

function ExtraContent(props) {

    return <div>
        <hr className="m-5"></hr><div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-0">
            <div className="resume-content">
                <h3 className="mb-0"><a href="https://newhorizonmission.ca/">New Horions</a></h3>
                <div className="subheading mb-3"></div>
                <p>Wrote, edited, and published a trilogy of novels about extrasolar colonization.</p>
                <p>Currently developing a sequel trilogy set half a millenium afterwards.</p>
            </div>
        </div>
    </div>
}

export default ExtraContent