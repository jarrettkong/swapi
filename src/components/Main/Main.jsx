import React, { Component } from 'react';
import Options from '../Options/Options';
import CardArea from '../CardArea/CardArea';

export class Main extends Component {
	state = {
		results: [],
		term: ''
	};

	handleClick = e => {
		const { name } = e.target;
		this.setState({ term: name }, () => {
			this.searchApi();
		});
	};

	searchApi = () => {
		const { term } = this.state;
		fetch(`https://swapi.co/api/${term}`)
			.then(res => res.json())
			.then(data => this.setState({ results: data.results }))
			.catch(err => console.log(err));
	};

	render() {
		return (
			<section className="Main">
				<h1>Swapi</h1>
				<Options handleClick={this.handleClick} />
				<CardArea results={this.state.results} />
			</section>
		);
	}
}

export default Main;
