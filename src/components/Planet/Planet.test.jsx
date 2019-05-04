import React from 'react';
import Planet from './Planet';
import { shallow } from 'enzyme';
import { mockPlanet } from '../../util/mockData';

describe('Planet', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<Planet result={mockPlanet} />);
	});

	it('should match the snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
