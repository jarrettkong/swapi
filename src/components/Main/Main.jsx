import React, { Component } from 'react';
import Options from '../Options/Options';
import CardArea from '../CardArea/CardArea';

export class Main extends Component {
	state = {
		results: [],
	};

	handleClick = e => {
		const term = e.target.name;
		this.searchApi(term);
	};

	fetchHomeworld = homeworld => {
		return fetch(homeworld)
			.then(res => res.json())
			.then(planet => planet)
			.catch(err => console.log(err));
	};

	fetchSpecies = species => {
		return fetch(species)
			.then(res => res.json())
			.then(species => species)
			.catch(err => console.log(err));
	};

	fetchMissingData = results => {
		const promises = results.map(result => {
			const speciesPromise = this.fetchSpecies(result.species[0]);
			const homeworldPromise = this.fetchHomeworld(result.homeworld);
			return Promise.all([speciesPromise, homeworldPromise]).then(data => ({
				...result,
				species: data[0],
				homeworld: data[1]
			}));
		});
		return Promise.all(promises);
	};

	searchApi = term => {
		fetch(`https://swapi.co/api/${term}`)
			.then(res => res.json())
			.then(data => this.fetchMissingData(data.results))
			.then(results =>
				this.setState({ results }, () => {
					console.log('results', this.state.results);
				})
			)
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
