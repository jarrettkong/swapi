import React from 'react';
import PropTypes from 'prop-types';

const Planet = props => {
	const { name, terrain, population, climate, residents } = props.result;

	return (
		<article className="Planet">
			<h2>{name}</h2>
			<p>Population: {population}</p>
			<p>Terrain: {terrain}</p>
			<p>Climate: {climate}</p>
			<p>Residents: {residents.join(', ')}</p>
		</article>
	);
};

Planet.propTypes = {
	result: PropTypes.object.isRequired
};

export default Planet;
