import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Person extends Component {
	state = {
		species: '',
		homeworld: {
			population: 0,
			name: ''
		}
	};
	componentDidMount() {
		this.fetchMissingData();
	}

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

	fetchMissingData = () => {
		const speciesPromise = this.fetchSpecies(this.props.result.species[0]);
		const homeworldPromise = this.fetchHomeworld(this.props.result.homeworld);
		return Promise.all([speciesPromise, homeworldPromise]).then(data => {
			this.setState({
				species: data[0],
				homeworld: data[1]
			});
		});
	};

	render() {
		const { name } = this.props.result;
		const { species, homeworld } = this.state;
		return (
			<article className="Person">
				<h2>{name}</h2>
				<p>Species: {species.name}</p>
				<p>Homeworld: {homeworld.name}</p>
				<p>Homeworld Population: {homeworld.population}</p>
			</article>
		);
	}
}

Person.propTypes = {
	result: PropTypes.object.isRequired
};

export default Person;
