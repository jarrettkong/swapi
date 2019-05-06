import React from 'react';
import './_Card.scss';

const Card = props => {
	const keys = Object.keys(props.info);
	const info = keys.slice(1, keys.length - 1);
	return (
		<article className="Card">
			<div className="Card-header">
				<h3 className="Card-title">{props.info['Name']}</h3>
				<button className="Card-favorite-btn"><i class="fab fa-rebel"></i></button>
				<hr />
			</div>
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

export default Card;
