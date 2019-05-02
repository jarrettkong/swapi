import React from 'react';
import PropTypes from 'prop-types';

const Vehicle = props => {
	const { 
		name, 
		vehicle_class: vehicleClass, 
		model, 
		passengers: capacity 
	} = props.result;
	
	return (
		<article className="Vehicle">
			<h2>{name}</h2>
			<p>Model: {model}</p>
			<p>Class: {vehicleClass}</p>
			<p>Capacity: {capacity}</p>
		</article>
	);
};

Vehicle.propTypes = {
	result: PropTypes.object.isRequired
};

export default Vehicle;
