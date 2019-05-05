import React from 'react';
import './_Card.scss';

const Card = props => {
	const keys = Object.keys(props.info);
	const info = keys.slice(1, keys.length - 1);
	return (
		<article className="Card">
			<h3 className="Card-title">{props.info['Name']}</h3>
			{info.map((infoKey, i) => (
				<p key={i} className="card-data">
					{`${infoKey}`}: {props.info[infoKey]}
				</p>
			))}
		</article>
	);
};

export default Card;
