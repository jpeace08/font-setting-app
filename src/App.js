import './App.css';
import React, {Component} from 'react';
import ResultFont from './components/ResultFont';
import Reset from './components/Reset';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';


class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			color:'red',
			fontSize : 15
		}
		this.onSetColor = this.onSetColor.bind(this);
		this.onSetSize = this.onSetSize.bind(this);
		this.onReset = this.onReset.bind(this);
	}
	

	onReset = () => {
		this.setState({
			color:'red',
			fontSize: 15
		})
	}

	onSetColor = (param) =>{
		this.setState({color:param});
	}

	onSetSize = (param) => {
		this.setState({fontSize:param});
	}

	render(){
		console.log(this.state);
		return (

			<div className="App App-header">
				<div className="container mt-5">
					<div className="row">
						<ColorPicker font-color = {this.state.color} onReceiveColor = {this.onSetColor}/>
						<SizeSetting font-size = {this.state.fontSize} onReceiveSize = {this.onSetSize}/>
					</div>
					<div className="row mt-5">	
						<ResultFont font-properties = {this.state}/>
						<Reset onReceiveStatusReset = {this.onReset}/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
