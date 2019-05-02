import React from 'react';
import Person from '../Person/Person';
import Planet from '../Planet/Planet';
import Vehicle from '../Vehicle/Vehicle';
import './_CardArea.scss';

const CardArea = props => {
	const { category, results } = props;

	// eslint-disable-next-line array-callback-return
	const cards = results.map((result, i) => {
		switch (category) {
			case 'people':
				return <Person key={i} result={result} />;
			case 'planets':
				return <Planet key={i} result={result} />;
			case 'vehicles':
				return <Vehicle key={i} result={result} />;
			default:
				break;
		}
	});

	return <section className="CardArea">{cards}</section>;
};

export default CardArea;
