import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
	const { name, species, homeworld } = props.result;
	return (
		<article className="Card">
			<h2>{name}</h2>
			<p>Species: {species.name}</p>
			<p>Homeworld: {homeworld.name}</p>
			<p>Homeworld Population: {homeworld.population}</p>
		</article>
	);
};

Card.propTypes = {
	result: PropTypes.object.isRequired
};

export default Card;
