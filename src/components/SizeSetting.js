import React, { Component } from 'react';

class SizeSetting extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sizes:[15,16,17,18,19,20,21,22],
            currentSize : this.props['font-size']
        }
        // console.log(this.state);
        this.changeFont = this.changeFont.bind(this);
    }
    
    static getDerivedStateFromProps = (nextProps, prevState) => {
        return nextProps['font-size'] !== prevState['font-size'] ? {currentSize:nextProps['font-size']} : prevState.currentSize;
    }

    changeFont = (isPlus) => {
        let currentIndex = this.state.sizes.indexOf(this.state.currentSize);
        // console.log(currentIndex);
        if(typeof currentIndex === 'number') {
            this.props.onReceiveSize(isPlus ? this.state.sizes[Math.min(currentIndex + 1, this.state.sizes.length-1)] : this.state.sizes[Math.max(currentIndex - 1, 0)]);
        }
    }


    render() {
        return (
            <div className="col-md-3">
                <div className="size-header">Size: <span id="size">{this.state.currentSize}</span>px</div>
                <div className="size-body">
                    <i className="btn btn-outline-success color-block btn-short fa fa-plus" onClick = {() => this.changeFont(true)}></i>
                    <i className="btn btn-outline-success color-block btn-short fa fa-minus" onClick = {() => this.changeFont(false)}></i>
                </div>
            </div>
        );
    }
}

export default SizeSetting;
