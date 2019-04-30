import React from 'react';
import { shallow } from 'enzyme';
import Main from './Main';

describe('Main', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<Main />);
	});

	it('should match the snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('should have a default state', () => {
		expect(wrapper.state()).toEqual({ results: [], term: '' });
	});

	it('should update state when handleClick is invoked', () => {
		const e = { target: { name: 'people' } };
		wrapper.instance().handleClick(e);
		expect(wrapper.state('term')).toEqual('people');
	});
});
