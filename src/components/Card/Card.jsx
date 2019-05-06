import React from 'react';
import PropTypes from 'prop-types';
import './_Card.scss';

const Card = props => {
	const keys = Object.keys(props.info);
	const info = keys.slice(1, keys.length - 1);
	const name = props.info['Name'];

	return (
		<article className="Card">
			<div className="Card-header">
				<h3 className="Card-title">{name}</h3>
				<button className="Card-favorite-btn" onClick={() => props.toggleFavorite(name)}>
					<i className={`fab fa-rebel ${props.info.favorite ? 'favorited' : null}`} />
				</button>
			</div>
			<hr />
			<div>
				{info.map((infoKey, i) => (
					<p key={i} className="Card-data">
						<span className="Card-prop">{`${infoKey}`}</span>
						<span className="Card-value">{props.info[infoKey]}</span>
					</p>
				))}
			</div>
		</article>
	);
};

Card.propTypes = {
	info: PropTypes.object,
	toggleFavorite: PropTypes.func
};

export default Card;
