import React from 'react';
import { shallow } from 'enzyme';
import OpeningCrawl from './OpeningCrawl';

const mockFilm = {
	title: 'The Last Jedi',
	opening_crawl: 'A long time ago in a galaxy far, far away',
	release_data: '12/17/2017'
};

describe('OpeningCrawl', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<OpeningCrawl film={mockFilm} />);
	});
	it('should match the snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
