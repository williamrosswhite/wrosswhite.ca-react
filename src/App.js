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
        this.setState(prevState => {
            if (prevState.developer === false) {
                prevState.developer = true;
            } else {
                prevState.developer = false;
            }
            console.log("developer value: " + prevState.developer)
        })
    }

    render() {
        console.log("renderer value: " + this.state.developer)
        return (
            <div id="page-top">
                {(this.state.developer) ? 
                <Developer changeCareerHandler={this.state.changeCareerHandler} /> :
                <Writer changeCareerHandler={this.changeCareerHandler} />
                }
            </div>
        );
    }
}

export default App;