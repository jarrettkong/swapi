import React from 'react';
import Card from '../Card/Card';
import './_CardArea.scss';

const CardArea = props => {
	const { results } = props;
	const cards = results.map((result, i) => {
		return <Card key={i} info={result} />;
	});

	return <section className="CardArea">{cards}</section>;
};

export default CardArea;
