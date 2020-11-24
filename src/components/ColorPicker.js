import React, { Component } from 'react';

class ColorPicker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            colors: [
                'red', 'green', 'blue', 'black', 'violet',
            ]
        }

        this.renderColorEl = this.renderColorEl.bind(this);
    }

    setActiveColor = (color) => {
        this.props.onReceiveColor(color)
    }
    
    renderColorEl = () => {
        return this.state.colors.map((color, index) => (<span 
            key={index} 
            className={this.props.['font-color'] === color ? 'active color-block':'color-block'}
            style={this.showColor(color)}
            onClick={() => this.setActiveColor(color)}
        ></span>));
    }

    showColor = (color) => {
        return {
            backgroundColor:color
        }
    }

    render() {
        return (
            <div className="col-md-3">
                <div className="picker-title">Color picker</div>
                <div className="color-choices-block">
                    {this.renderColorEl()}
                </div>
            </div>
        );
    }
}

export default ColorPicker;
