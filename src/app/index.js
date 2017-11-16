console.log('it works');
import React from 'react';
import {render} from 'react-dom';
import {Header} from './components/Header';
import {Home} from './components/Home';

class App extends React.Component{
	constructor(props){
		super();
		this.state={
			homeLink:"Home"
		}
	}

	onChangeLinkName(newName){
		this.setState({
			homeLink:newName
		});
	}

	onGreet(){
		alert("Hello From Parent Component");
	}
	render(){
		var user={
		name:"sagar",
		hobbies:['advanture activity','plyaing outdoor games']
	};
		return(
				<div className="container">
					<div className="row">
						<div className="col-xs-10 col-xs-offset-1">
							<Header homeLink={this.state.homeLink}/>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-10 col-xs-offset-1">
							<Home name={"Max"} 
								 age={20} user={user}
								 greet={this.onGreet} 
								 changeLink={this.onChangeLinkName.bind(this)}
								 initialLink={this.state.homeLink}>
								<p>This is childern!</p>
							</Home>
						</div>
					</div>
				</div>
			);
	}
}

render(<App/>,document.getElementById('app'));