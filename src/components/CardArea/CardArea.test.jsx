import React from 'react';
import CardArea from './CardArea';
import { shallow } from 'enzyme';
import { mockPeople } from '../../util/mockData';

describe('CardArea', () => {
	let wrapper, mockCategory;
	beforeEach(() => {
		mockCategory = 'people';
		wrapper = shallow(<CardArea category={mockCategory} results={mockPeople} />);
	});

	it('should match the snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
