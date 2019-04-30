import React, { Component } from 'react';
import OpeningCrawl from '../OpeningCrawl/OpeningCrawl';
import Main from '../Main/Main';
import './App.scss';

class App extends Component {
	state = {
		displayFilm: {}
	};

	componentDidMount() {
		const rand = Math.floor(Math.random() * 7);
		fetch('https://swapi.co/api/films')
			.then(res => res.json())
			.then(data => this.setState({ displayFilm: data.results[rand] }))
			.catch(err => console.log(err));
	}

	render() {
		return (
			<section className="App">
				<OpeningCrawl film={this.state.displayFilm} />
				<Main />
			</section>
		);
	}
}

export default App;
