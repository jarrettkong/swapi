import React from 'react';

const Card = props => {
	const { name, homeworld, species } = props.result;
	return (
		<article className="Card">
			<h2>{name}</h2>
			<p>{species}</p>
			<p>{homeworld}</p>
		</article>
	);
};

export default Card;
