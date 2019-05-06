import React from 'react';
import Card from './Card';
import { mockPeople, mockPlanets, mockVehicles } from '../../util/mockData';
import { cleanPeople, cleanPlanets, cleanVehicles } from '../../util/cleaners';
import { shallow } from 'enzyme';

describe('Card', () => {
	it('should match the snapshot with people', () => {
		const mockInfo = cleanPeople(mockPeople);
		const wrapper = shallow(<Card info={mockInfo} />);
		expect(wrapper).toMatchSnapshot();
	});

	it('should match the snapshot with planets', () => {
		const mockInfo = cleanPlanets(mockPlanets);
		const wrapper = shallow(<Card info={mockInfo} />);
		expect(wrapper).toMatchSnapshot();
	});

	it('should match the snapshot with vehicles', () => {
		const mockInfo = cleanVehicles(mockVehicles);
		const wrapper = shallow(<Card info={mockInfo} />);
		expect(wrapper).toMatchSnapshot();
	});
});
