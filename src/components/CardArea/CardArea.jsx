import React from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types'
import './_CardArea.scss';

const CardArea = props => {
	const { results } = props;
	const cards = results.map((result, i) => {
		return <Card key={i} info={result} toggleFavorite={props.toggleFavorite} />;
	});

	return <section className="CardArea">{cards}</section>;
};

CardArea.propTypes = {
	results: PropTypes.array,
	toggleFavorite: PropTypes.func
}

export default CardArea;