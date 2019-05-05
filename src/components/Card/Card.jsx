import React from 'react';
import './_Card.scss';

const Card = props => {
	const info = Object.keys(props.info);
	return (
		<article className="Card">
			<h3 className='Card-title'>{props.info['Name']}</h3>
			{info.slice(1, info.length - 1).map((data,i) => (
				<p key={i} className="card-data">
					{`${data}`}: {props.info[data]}
				</p>
			))}
		</article>
	);
};

export default Card;
