import React from "react";
import text from "../../text/strings.json"
import ExtraContent from "./SubComponents/ExtraContent.js";
import extraData from '../../text/extra-text'

class Extras extends React.Component {

    render() {

        const ex = extraData.map(item => <ExtraContent key={item.id} data={item} />)
        
        return (
            <div className="container-fluid p-0">
                <section className="resume-section p-3 p-lg-5 align-items-center" id="extras">
                    <div className="w-100">
                        <h2 className="mb-0 spacer text-primary">{text.headers.extras}</h2>
                        {ex}
                    </div>
                </section>
            </div>
        );
    }
}

export default Extras;