import React, { Component } from 'react';

class Reset extends Component {

    resetStatus = () => {
        this.props.onReceiveStatusReset();
    }

    render() {
        return (
            <div className="col-md-2">
                <div className="btn btn-outline-danger"
                    onClick = {this.resetStatus}
                >Reset</div>
            </div>
        );
    }
}

export default Reset;
