import React, { Component } from 'react';
import Options from '../Options/Options';
import CardArea from '../CardArea/CardArea';
import { fetchHomeworld, fetchSpecies, searchApi, fetchResidents } from '../../util/api';

export class Main extends Component {
	state = {
		results: {
			people: [],
			planets: [],
			vehicles: []
		},
		category: '',
		showFavorites: false
	};

	handleClick = e => {
		const category = e.target.name;
		this.setState({ category }, () => {
			switch (category) {
				case 'people':
					this.fetchPeople();
					break;
				case 'planets':
					this.fetchPlanets();
					break;
				case 'vehicles':
					this.fetchVehicles();
					break;
				default:
					break;
			}
		});
	};

	fetchPlanets = () => {
		searchApi('planets')
			.then(planets => fetchResidents(planets.results))
			.catch(err => console.log(err));
	};

	fetchVehicles = () => {
		searchApi('vehicles')
			.then(vehicles => console.log(vehicles.results))
			.catch(err => console.log(err));
	};

	fetchPeople = () => {
		searchApi('people')
			.then(people => fetchHomeworld(people.results))
			.then(people => fetchSpecies(people))
			.then(results => this.setState({ results }))
			.catch(err => console.log(err));
	};

	render() {
		const { category, results } = this.state;
		return (
			<section className="Main">
				<h1>Swapi</h1>
				<Options handleClick={this.handleClick} />
				{this.state.category && <CardArea results={results[category]} />}
			</section>
		);
	}
}

export default Main;
