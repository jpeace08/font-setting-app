import React, { Component } from 'react';

class ResultFont extends Component {

    constructor(props) {
        super(props);
        this.state = {...this.props['font-properties']};
    }
    
    setFontFormat = () => {
        return {
            fontSize:this.state.fontSize,
            color:this.state.color
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(prevState);
        
        return (nextProps.color !== prevState.color || nextProps.fontSize !== prevState.fontSize) ? {...nextProps['font-properties']}:{...prevState}; 
    }

    render() {
        return (
            <div className="col-md-4">
                <div id="result"
                    style = {this.setFontFormat()}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
            </div>
        );
    }
}

export default ResultFont;
