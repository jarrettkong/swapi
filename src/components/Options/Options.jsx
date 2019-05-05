import React from 'react';
import './_Options.scss';

const Options = props => {
	return (
		<section className="Options">
			<button name="people" onClick={props.handleClick} className="Options-btn people-option">
				<img /> People
			</button>
			<button name="planets" onClick={props.handleClick} className="Options-btn planets-option">
				<img /> Planets
			</button>
			<button name="vehicles" onClick={props.handleClick} className="Options-btn vehicles-option">
				<img /> Vehicles
			</button>
		</section>
	);
};

export default Options;
