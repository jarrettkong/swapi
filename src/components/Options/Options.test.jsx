import React from 'react';
import { shallow } from 'enzyme';
import Options from './Options';

const mockHandeClick = jest.fn();

describe('Options', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<Options handleClick={mockHandeClick} />);
	});

	it('should match the snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('should call handleClick when one of the three buttons is clicked', () => {
		wrapper
			.find('.Options-btn')
			.first()
			.simulate('click');
		expect(mockHandeClick).toHaveBeenCalled();
	});
});
