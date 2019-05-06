import { cleanPeople, cleanPlanets, cleanVehicles } from './cleaners';
import { mockPeople, mockPlanets, mockVehicles } from './mockData';

describe('cleanPeople', () => {
	it('should return cleaned data from the raw data', () => {
		const response = [
			{
				Name: 'Luke Skywalker',
				Species: undefined,
				Homeworld: undefined,
				'Population of Homeoworld': undefined,
				favorite: false
			},
			{
				Name: 'Luke Skywalker',
				Species: undefined,
				Homeworld: undefined,
				'Population of Homeoworld': undefined,
				favorite: false
			},
			{
				Name: 'Luke Skywalker',
				Species: undefined,
				Homeworld: undefined,
				'Population of Homeoworld': undefined,
				favorite: false
			}
		];
		expect(cleanPeople(mockPeople)).toEqual(response);
	});
});

describe('cleanPlanets', () => {
	it('should return cleaned data from the raw data', () => {
		const response = [
			{
				Name: 'Tatooine',
				Population: '200000',
				Climate: 'arid',
				Terrain: 'desert',
				Residents:
					'https://swapi.co/api/people/1/, https://swapi.co/api/people/2/, https://swapi.co/api/people/4/, https://swapi.co/api/people/6/, https://swapi.co/api/people/7/, https://swapi.co/api/people/8/, https:swapi.co/api/people/9/, https://swapi.co/api/people/11/, https://swapi.co/api/people/43/, https://swapi.co/api/people/62/',
				favorite: false
			},
			{
				Name: 'Tatooine',
				Population: '200000',
				Climate: 'arid',
				Terrain: 'desert',
				Residents:
					'https://swapi.co/api/people/1/, https://swapi.co/api/people/2/, https://swapi.co/api/people/4/, https://swapi.co/api/people/6/, https://swapi.co/api/people/7/, https://swapi.co/api/people/8/, https:swapi.co/api/people/9/, https://swapi.co/api/people/11/, https://swapi.co/api/people/43/, https://swapi.co/api/people/62/',
				favorite: false
			},
			{
				Name: 'Tatooine',
				Population: '200000',
				Climate: 'arid',
				Terrain: 'desert',
				Residents:
					'https://swapi.co/api/people/1/, https://swapi.co/api/people/2/, https://swapi.co/api/people/4/, https://swapi.co/api/people/6/, https://swapi.co/api/people/7/, https://swapi.co/api/people/8/, https:swapi.co/api/people/9/, https://swapi.co/api/people/11/, https://swapi.co/api/people/43/, https://swapi.co/api/people/62/',
				favorite: false
			}
		];
		expect(cleanPlanets(mockPlanets)).toEqual(response);
	});
});

describe('cleanVehicles', () => {
	it('should return cleaned data from the raw data', () => {
		const response = [
			{
				Name: 'Sand Crawler',
				Model: 'Digger Crawler',
				Class: 'wheeled',
				Passengers: '30',
				favorite: false
			},
			{
				Name: 'Sand Crawler',
				Model: 'Digger Crawler',
				Class: 'wheeled',
				Passengers: '30',
				favorite: false
			},
			{
				Name: 'Sand Crawler',
				Model: 'Digger Crawler',
				Class: 'wheeled',
				Passengers: '30',
				favorite: false
			}
		];
		expect(cleanVehicles(mockVehicles)).toEqual(response);
	});
});
