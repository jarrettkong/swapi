import { fetchMovie } from './api';
import { mockFilm } from './mockData';
describe('fetchMovie', () => {
	let mockFilmResponse;
	beforeEach(() => {
		mockFilmResponse = [mockFilm];
		window.fetch = jest.fn().mockImplementation(() => {
			return Promise.resolve({
				ok: true,
				json: () => Promise.resolve(mockFilmResponse)
			});
		});
	});

	it('should be called with the correct params', async () => {
		const testRand = Math.floor(Math.random() * 7) + 1;
		const url = `https://swapi.co/api/films/${testRand}`;
		await fetchMovie(testRand);
		expect(window.fetch).toHaveBeenCalledWith(url);
	});

	it('should return a parsed response if ok', async () => {
		const recieved = await fetchMovie(1);
		expect(recieved).toEqual(mockFilmResponse);
	});

	it('should return an error response if not ok', async () => {
		window.fetch = jest.fn().mockImplementation(() =>
			Promise.resolve({
				ok: false
			})
		);
		await expect(fetchMovie(9)).rejects.toEqual(Error('Unable to fetch film'));
	});
});
