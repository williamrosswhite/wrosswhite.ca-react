import React from 'react';
import Writer from './Components/Writer'
import Developer from './Components/Developer'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            developer: false
        }
        this.changeCareerHandler = this.changeCareerHandler.bind(this)
    }

    changeCareerHandler() {
        if (this.state.developer) {
            this.setState({ developer: false });
        }
        else {
            this.setState({ developer: true });
        }
        console.log("handler value: " + this.state.developer)
    }

    render() {
        console.log("renderer value: " + this.state.developer)
        return (
            <div id="page-top">
                {(this.state.developer) ?
                    <Developer changeCareerHandler={this.changeCareerHandler} /> :
                    <Writer changeCareerHandler={this.changeCareerHandler} />
                }
            </div>
        );
    }
}

export default App;