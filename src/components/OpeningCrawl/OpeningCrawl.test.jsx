import React from 'react';
import { shallow, mount } from 'enzyme';
import OpeningCrawl from './OpeningCrawl';
import { mockFilm } from '../../util/mockData';

describe('OpeningCrawl', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<OpeningCrawl />);
	});

	it('should match the snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('should have initial state', () => {
		expect(wrapper.state()).toEqual({
			film: {},
			//TODO how to test false before mount?
			loading: true,
			error: ''
		});
	});

	describe('getNumber', () => {
		it('should convert a number to roman numeral', () => {
			const nums = [1, 2, 3, 4, 5, 6, 7];
			const received = nums.map(num => wrapper.instance().getRomanNumeral(num));
			expect(received).toEqual(['I', 'II', 'III', 'IV', 'V', 'VI', 'VII']);
		});
	});

	describe('getMovie', () => {
		it('should update movie state on success', async () => {
			await wrapper.instance().getMovie();
			expect(wrapper.state('film')).toHaveProperty(...Object.keys(mockFilm));
		});

		it('should update error state on fail', async () => {
			window.fetch = jest.fn().mockImplementation(() =>
				Promise.resolve({
					ok: false
				})
			);
			await wrapper.instance().getMovie();
			expect(wrapper.state('error')).toEqual('Unable to fetch film');
		});
	});
});
