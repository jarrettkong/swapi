import React, { Component } from 'react';
import Options from '../Options/Options';
import CardArea from '../CardArea/CardArea';
import { fetchHomeworld, fetchSpecies, searchApi, fetchResidents } from '../../util/api';
import './_Main.scss';

export class Main extends Component {
	state = {
		results: {
			people: [],
			planets: [],
			vehicles: []
		},
		loading: false,
		category: '',
		showFavorites: false
	};

	handleClick = e => {
		const category = e.target.name;
		const { results } = this.state;
		this.setState({ category }, () => {
			if (!results[category].length) {
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
			}
		});
	};

	fetchPeople = () => {
		const { results } = this.state;
		searchApi('people')
			.then(people => fetchHomeworld(people.results))
			.then(people => fetchSpecies(people))
			.then(people => this.setState({ results: { ...results, people } }))
			.catch(err => console.log(err));
	};

	fetchPlanets = () => {
		const { results } = this.state;
		searchApi('planets')
			.then(planets => fetchResidents(planets.results))
			.then(planets => this.setState({ results: { ...results, planets } }))
			.catch(err => console.log(err));
	};

	fetchVehicles = () => {
		const { results } = this.state;
		searchApi('vehicles')
			.then(vehicles => vehicles.results)
			.then(vehicles => this.setState({ results: { ...results, vehicles } }))
			.catch(err => console.log(err));
	};

	render() {
		const { category, results } = this.state;
		return (
			<section className="Main">
				<h1 className="Main-header">Swapi</h1>
				<Options handleClick={this.handleClick} />
				{this.state.category && <CardArea category={category} results={results[category]} />}
			</section>
		);
	}
}

export default Main;
