import React, { Component } from 'react';
import Options from '../Options/Options';
import CardArea from '../CardArea/CardArea';
import Loader from '../Loader/Loader';
import { fetchHomeworld, fetchSpecies, searchApi, fetchResidents } from '../../util/api';
import { cleanPeople, cleanPlanets, cleanVehicles } from '../../util/cleaners';
import './_Main.scss';

export class Main extends Component {
	state = {
		results: {
			people: [],
			planets: [],
			vehicles: []
		},
		error: '',
		loading: false,
		category: '',
		showFavorites: false
	};

	handleClick = e => {
		const category = e.target.name;
		const { results } = this.state;
		this.setState({ category }, () => {
			if (!results[category].length) {
				this.setState({ loading: true }, () => {
					if (category === 'people') {
						this.fetchPeople();
					} else if (category === 'planets') {
						this.fetchPlanets();
					} else {
						this.fetchVehicles();
					}
				});
			}
		});
	};

	fetchPeople = () => {
		const { results } = this.state;
		searchApi('people')
			.then(people => fetchHomeworld(people.results))
			.then(people => fetchSpecies(people))
			.then(people => cleanPeople(people))
			.then(people => this.setState({ results: { ...results, people }, loading: false }))
			.catch(error => this.setState({ error }));
	};

	fetchPlanets = () => {
		const { results } = this.state;
		searchApi('planets')
			.then(planets => fetchResidents(planets.results))
			.then(planets => cleanPlanets(planets))
			.then(planets => this.setState({ results: { ...results, planets }, loading: false }))
			.catch(error => this.setState({ error }));
	};

	fetchVehicles = () => {
		const { results } = this.state;
		searchApi('vehicles')
			.then(vehicles => vehicles.results)
			.then(vehicles => cleanVehicles(vehicles))
			.then(vehicles => this.setState({ results: { ...results, vehicles }, loading: false }))
			.catch(error => this.setState({ error }));
	};

	render() {
		const { category, results, loading } = this.state;
		const display = loading ? (
			<div className="Main-loader-wrapper">
				<Loader />
			</div>
		) : category ? (
			<CardArea category={category} results={results[category]} />
		) : null;

		return (
			<main className="Main">
				<nav>
					<h1 className="Main-header">
						<img src="" alt="swapi-box logo" />
					</h1>
				<Options handleClick={this.handleClick} />
				</nav>
				{display}
			</main>
		);
	}
}

export default Main;
