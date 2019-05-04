import React from 'react';
import './_Options.scss';

const Options = props => {
	return (
		<section className="Options">
			<button name="people" onClick={props.handleClick} className="Options-btn">
				People
			</button>
			<button name="planets" onClick={props.handleClick} className="Options-btn">
				Planets
			</button>
			<button name="vehicles" onClick={props.handleClick} className="Options-btn">
				Vehicles
			</button>
		</section>
	);
};

export default Options;
