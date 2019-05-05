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
		loading: false,
		category: '',
		showFavorites: false
	};

	componentDidMount() {}

	handleClick = e => {
		const category = e.target.name;
		const { results } = this.state;
		this.setState({ category }, () => {
			if (!results[category].length) {
				this.setState({ loading: true });
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
			.then(people => cleanPeople(people))
			.then(people => this.setState({ results: { ...results, people }, loading: false }))
			.catch(err => console.log(err));
	};

	fetchPlanets = () => {
		const { results } = this.state;
		searchApi('planets')
			.then(planets => fetchResidents(planets.results))
			.then(planets => cleanPlanets(planets))
			.then(planets => this.setState({ results: { ...results, planets }, loading: false }))
			.catch(err => console.log(err));
	};

	fetchVehicles = () => {
		const { results } = this.state;
		searchApi('vehicles')
			.then(vehicles => vehicles.results)
			.then(vehicles => cleanVehicles(vehicles))
			.then(vehicles => this.setState({ results: { ...results, vehicles }, loading: false }))
			.catch(err => console.log(err));
	};

	render() {
		const { category, results, loading } = this.state;
		const display = loading ? (
			<Loader />
		) : category ? (
			<CardArea category={category} results={results[category]} />
		) : null;

		return (
			<main className="Main">
				<h1 className="Main-header">Swapi</h1>
				<Options handleClick={this.handleClick} />
				{display}
			</main>
		);
	}
}

export default Main;
