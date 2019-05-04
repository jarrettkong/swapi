import React from 'react';
import Person from './Person';
import { shallow } from 'enzyme';
import { mockPerson } from '../../util/mockData';

describe('Person', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<Person result={mockPerson} />);
	});

	it('should match the snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
