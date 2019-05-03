export const searchApi = term => {
	return fetch(`https://swapi.co/api/${term}`).then(res => {
		if (!res.ok) {
			throw new Error('Unable to fetch data');
		}
		return res.json();
	});
};

export const fetchHomeworld = people => {
	const promises = people.map(person => {
		return fetch(person.homeworld)
			.then(res => res.json())
			.then(homeworld => ({ ...person, homeworld }));
	});
	return Promise.all(promises);
};

export const fetchSpecies = people => {
	const promises = people.map(person => {
		return fetch(person.species[0])
			.then(res => res.json())
			.then(species => ({ ...person, species }));
	});
	return Promise.all(promises);
};

export const fetchResidents = planets => {
	const promises = planets.map(planet => {
		return fetchResidentNames(planet.residents).then(residents => ({ ...planet, residents }));
	});
	return Promise.all(promises);
};

const fetchResidentNames = residents => {
	const promises = residents.map(resident => {
		return fetch(resident)
			.then(res => res.json())
			.then(data => data.name);
	});
	return Promise.all(promises);
};

export const fetchMovie = rand => {
	return fetch(`https://swapi.co/api/films/${rand}`).then(res => {
		if (!res.ok) {
			throw new Error('Unable to fetch film');
		}
		return res.json();
	});
};
