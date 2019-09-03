import React from 'react';

class Thing extends React.Component {
    state = {
        mark: "Mark"
    }

    clicked = () => {
        console.log("Yo");
    }

    
    render() {
        return(
            <div onClick={this.clicked}>Hello {this.state.mark}</div>
        );
    }
}

export default Thing;