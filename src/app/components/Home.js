import React from 'react';
import PropTypes from 'prop-types';
export class Home extends React.Component{

	constructor(props){
		super();
		this.state={
			age:props.age,
			status:0,
			homeLink:props.initialLink
		}
		
	}

	makeMeOlder(){

		this.setState({
			age:this.state.age+3
		})
		
	}
	onChangeHandler(event){
		this.setState({
			homeLink:event.target.value
		});
	}
	changeLinkName(){
		console.log(this.state.homeLink);
		this.props.changeLink(this.state.homeLink);
	}
	render(){
		console.log("hi");
		var text="Something";
		return(
				<div>
					<p>In a New Component!</p>
					<p>{text}</p>
					<p>Your name is {this.props.name},age is {this.state.age}</p>
					<p>Status :{this.state.status}</p>
					<hr/>
					<button onClick={()=>this.makeMeOlder()} className="btn btn-primary">Make Me Older</button>
					<p>User Object=> Name:{this.props.user.name}</p>
					<div>
						<h4>Hobbies</h4>
						<ul>
							{this.props.user.hobbies.map((hobby,i)=><li key={i}>{hobby}</li>)}
						</ul>
					</div>
					<hr/>
					{this.props.children}
					<hr/>
					<button onClick={this.props.greet} className="btn btn-primary">Greet</button>
					<hr/>
					<input type="text" value={this.state.homeLink} onChange={(event)=>this.onChangeHandler(event)}/>
					<button onClick={()=>this.changeLinkName()} className="btn btn-primary">Change LinkName</button>
					
				</div>
			);
	}
}

Home.propTypes={
	name:PropTypes.string,
	age:PropTypes.number,
	user:PropTypes.object,
	children:PropTypes.element.isRequired,
	greet:PropTypes.func,
	initialLink:PropTypes.string
};