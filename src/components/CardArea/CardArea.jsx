import React from 'react';
import Card from '../Card/Card';

const CardArea = props => {
	return (
		<section className="cardArea">
			{props.results.map((result, i) => {
				return <Card key={i} result={result} />;
			})}
		</section>
	);
};

export default CardArea;
