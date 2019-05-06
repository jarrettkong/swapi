import React from 'react';
import PropTypes from 'prop-types';
import './_Options.scss';

const Options = props => {
	return (
		<section className="Options">
			<button name="people" onClick={props.handleClick} className="Options-btn people-option">
				<img src="" alt="people option logo" name="people" /> People
			</button>
			<button name="planets" onClick={props.handleClick} className="Options-btn planets-option">
				<img src="" alt=" planets option logo" name="planets" /> Planets
			</button>
			<button name="vehicles" onClick={props.handleClick} className="Options-btn vehicles-option">
				<img src="" alt=" vehicles option logo" name="vehicles" /> Vehicles
			</button>
		</section>
	);
};

Options.propTypes = {
	handleClick: PropTypes.func
};

export default Options;
