import React, { Component } from 'react';
import Options from '../Options/Options';

export class Main extends Component {
	state = {
		results: [],
		term: ''
	};

	handleClick = e => {
		const { name } = e.target;
		this.setState({ term: name });
	};

	render() {
		return (
			<section className="Main">
				<h1>Swapi</h1>

				<Options />
			</section>
		);
	}
}

export default Main;
