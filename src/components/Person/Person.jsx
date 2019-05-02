import React from 'react';
import PropTypes from 'prop-types';

const Person = props => {
	const { name, species, homeworld } = props.result;

	return (
		<article className="Person">
			<h2>{name}</h2>
			<p>Species: {species.name}</p>
			<p>Homeworld: {homeworld.name}</p>
			<p>Homeworld Population: {homeworld.population}</p>
		</article>
	);
};

Person.propTypes = {
	result: PropTypes.object.isRequired
};

export default Person;
