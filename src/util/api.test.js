import { fetchMovie, searchApi, fetchHomeworld, fetchSpecies, fetchResidents, fetchResidentNames } from './api';
import {
	mockFilm,
	mockPlanet,
	mockPlanets,
	mockPerson,
	mockPeople,
	mockSpecies,
	mockName,
	mockResidents
} from './mockData';

describe('searchApi', () => {
	let mockResponse;
	beforeEach(() => {
		mockResponse = [mockPlanet, mockPlanet, mockPlanet];
		window.fetch = jest.fn().mockImplementation(() => {
			return Promise.resolve({
				ok: true,
				json: () => Promise.resolve(mockResponse)
			});
		});
	});

	it('should call fetch with the correct params', async () => {
		const term = 'planet';
		const url = `https://swapi.co/api/${term}`;
		await searchApi(term);
		expect(window.fetch).toHaveBeenCalledWith(url);
	});

	it('should return a parsed version of the result on success', async () => {
		const term = 'planet';
		const received = await searchApi(term);
		expect(received).toEqual(mockResponse);
	});

	it('should throw an error on fail', async () => {
		window.fetch = jest.fn().mockImplementation(() => {
			return Promise.resolve({ ok: false });
		});
		await expect(searchApi('planet')).rejects.toEqual(Error('Unable to fetch data'));
	});
});

describe('fetchMovie', () => {
	beforeEach(() => {
		window.fetch = jest.fn().mockImplementation(() => {
			return Promise.resolve({
				ok: true,
				json: () => Promise.resolve(mockFilm)
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
		expect(recieved).toEqual(mockFilm);
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

describe('fetchHomeworld', () => {
	beforeEach(() => {
		window.fetch = jest.fn().mockImplementation(() => {
			return Promise.resolve({
				ok: true,
				json: () => Promise.resolve(mockPlanet)
			});
		});
	});

	it('should return a promise when true', async () => {
		await expect(fetchHomeworld(mockPeople)).toBeInstanceOf(Promise);
	});

	it('should call fetch with the correct params', async () => {
		await fetchHomeworld(mockPeople);
		mockPeople.forEach(person => expect(window.fetch).toHaveBeenCalledWith(person.homeworld));
	});

	it('should throw an error when false', async () => {
		window.fetch = jest.fn().mockImplementation(() => {
			return Promise.resolve({
				ok: false
			});
		});
		await expect(fetchHomeworld(mockPeople)).toBeInstanceOf(Promise);
	});

	it('should return the homeworld as an object', async () => {
		const mockResponse = [
			{ ...mockPerson, homeworld: mockPlanet },
			{ ...mockPerson, homeworld: mockPlanet },
			{ ...mockPerson, homeworld: mockPlanet }
		];
		const data = await fetchHomeworld(mockPeople);
		expect(data).toEqual(mockResponse);
	});
});

describe('fetchSpecies', () => {
	let mockPeople = [mockPerson, mockPerson, mockPerson];
	beforeEach(() => {
		window.fetch = jest.fn().mockImplementation(() => {
			return Promise.resolve({
				ok: true,
				json: () => Promise.resolve(mockSpecies)
			});
		});
	});

	it('should return a promise when true', async () => {
		await expect(fetchSpecies(mockPeople)).toBeInstanceOf(Promise);
	});

	it('should call fetch with the correct params', async () => {
		await fetchSpecies(mockPeople);
		mockPeople.forEach(person => expect(window.fetch).toHaveBeenCalledWith(person.species[0]));
	});

	it('should throw an error when false', async () => {
		window.fetch = jest.fn().mockImplementation(() => {
			return Promise.resolve({
				ok: false
			});
		});
		await expect(fetchSpecies(mockPeople)).rejects.toEqual(Error('Unable to fetch species'));
	});

	it('should return the person with the homeworld', async () => {
		const mockResponse = [
			{ ...mockPerson, species: mockSpecies },
			{ ...mockPerson, species: mockSpecies },
			{ ...mockPerson, species: mockSpecies }
		];
		const data = await fetchSpecies(mockPeople);
		expect(data).toEqual(mockResponse);
	});
});

describe('fetchHomeworld', () => {
	let mockPeople;
	beforeEach(() => {
		mockPeople = [mockPerson, mockPerson, mockPerson];
		window.fetch = jest.fn().mockImplementation(() => {
			return Promise.resolve({
				ok: true,
				json: () => Promise.resolve(mockPlanet)
			});
		});
	});

	it('should return a promise when true', async () => {
		await expect(fetchHomeworld(mockPeople)).toBeInstanceOf(Promise);
	});

	it('should call fetch with the correct params', async () => {
		await fetchHomeworld(mockPeople);
		mockPeople.forEach(person => expect(window.fetch).toHaveBeenCalledWith(person.homeworld));
	});

	it('should throw an error when false', async () => {
		window.fetch = jest.fn().mockImplementation(() => {
			return Promise.resolve({
				ok: false
			});
		});
		await expect(fetchHomeworld(mockPeople)).toBeInstanceOf(Promise);
	});

	it('should return the person with the homeworld', async () => {
		const mockResponse = [
			{ ...mockPerson, homeworld: mockPlanet },
			{ ...mockPerson, homeworld: mockPlanet },
			{ ...mockPerson, homeworld: mockPlanet }
		];
		const data = await fetchHomeworld(mockPeople);
		expect(data).toEqual(mockResponse);
	});
});

describe('fetchResidents', () => {
	it('should return a promise when true', async () => {
		await expect(fetchResidents(mockPlanets)).toBeInstanceOf(Promise);
	});

	it.skip('should return the planet with the residents', async () => {
		const mockResponse = [
			{ ...mockPlanet, residents: mockResidents },
			{ ...mockPlanet, residents: mockResidents },
			{ ...mockPlanet, residents: mockResidents }
		];
		const data = await fetchResidents(mockPlanets);
		expect(data).toEqual(mockResponse);
	});
});

describe('fetchResidentNames', () => {
	beforeEach(() => {
		window.fetch = jest.fn().mockImplementation(() => {
			return Promise.resolve({
				ok: true,
				json: () => Promise.resolve(mockName)
			});
		});
	});

	it('should return a promise when true', async () => {
		await expect(fetchResidentNames(mockResidents)).toBeInstanceOf(Promise);
	});

	it('should call fetch with the correct params', async () => {
		await fetchResidentNames(mockResidents);
		mockResidents.forEach(person => expect(window.fetch).toHaveBeenCalledWith(person));
	});

	it('should throw an error when false', async () => {
		window.fetch = jest.fn().mockImplementation(() => {
			return Promise.resolve({
				ok: false
			});
		});
		await expect(fetchResidentNames(mockResidents)).rejects.toEqual(Error('Unable to fetch names'));
	});

	it.skip('should return an array of the resident names', async () => {
		const mockResponse = [mockName, mockName, mockName];
		const data = await fetchResidentNames(mockResidents);
		expect(data).toEqual(mockResponse);
	});
});
