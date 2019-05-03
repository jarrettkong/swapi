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
		const state = {
			results: {
				people: [],
				planets: [],
				vehicles: []
			},
			loading: false,
			category: '',
			showFavorites: false
		};
		expect(wrapper.state()).toEqual(state);
	});

	it('should update state when handleClick is invoked', () => {
		const e = { target: { name: 'people' } };
		wrapper.instance().handleClick(e);
		expect(wrapper.state('category')).toEqual('people');
	});
});
