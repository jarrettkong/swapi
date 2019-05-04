import React from 'react';
import Vehicle from './Vehicle';
import { shallow } from 'enzyme';
import { mockVehicle } from '../../util/mockData';

describe('Vehicle', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<Vehicle result={mockVehicle} />);
	});

	it('should match the snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
