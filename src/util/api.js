export const fetchHomeworld = people => {
	const promises = people.map(person => {
		return fetch(person.homeworld)
			.then(res => res.json())
			.then(homeworld => ({ ...person, homeworld }));
	});
	return Promise.all(promises);
};

export const fetchResidents = planets => {
	const promises = planets.map(planet => {
		return fetchResidentNames(planet.residents).then(residents => ({ ...planet, residents }));
	});
	Promise.all(promises).then(planets => console.log(planets));
};

const fetchResidentNames = residents => {
	const promises = residents.map(resident => {
		return fetch(resident)
			.then(res => res.json())
			.then(data => data.name);
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

export const searchApi = term => {
	return fetch(`https://swapi.co/api/${term}`).then(response => {
		if (!response.ok) {
			throw new Error('Error adding grocery');
		}
		return response.json();
	});
};
