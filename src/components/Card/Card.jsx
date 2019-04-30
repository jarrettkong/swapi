import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
	state = {
		species: '',
		homeworld: {
			name: '',
			population: 0
		}
	};

	fetchHomeworld = () => {
		return fetch(this.props.result.homeworld).then(res => res.json());
	};

	fetchSpecies = () => {
		return fetch(this.props.result.species[0]).then(res => res.json());
	};

	componentDidMount() {
		const speciesPromise = this.fetchSpecies();
		const homeworldPromise = this.fetchHomeworld();

		Promise.all([speciesPromise, homeworldPromise])
			.then(data => {
				this.setState({
					species: data[0].name,
					homeworld: {
						name: data[1].name,
						population: data[1].population
					}
				});
			})
			.catch(err => console.log(err));
	}

	render() {
		const { name } = this.props.result;
		const { species, homeworld } = this.state;
		return (
			<article className="Card">
				<h2>{name}</h2>
				<p>Species: {species}</p>
				<p>Homeworld: {homeworld.name}</p>
				<p>Homeworld Population: {homeworld.population}</p>
			</article>
		);
	}
}

Card.propTypes = {
	result: PropTypes.object.isRequired
};

export default Card;
