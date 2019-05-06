export const cleanPeople = people => {
	return people.map(person => {
		return {
			id: person.created,
			Name: person.name,
			Species: person.species.name,
			Homeworld: person.homeworld.name,
			'Population of Homeworld': person.homeworld.population,
			favorite: false
		};
	});
};

export const cleanPlanets = planets => {
	return planets.map(planet => {
		return {
			id: planet.created,
			Name: planet.name,
			Population: planet.population,
			Climate: planet.climate,
			Terrain: planet.terrain,
			Residents: planet.residents.join(', ') || 'N/A',
			favorite: false
		};
	});
};

export const cleanVehicles = vehicles => {
	return vehicles.map(vehicle => {
		return {
			id: vehicle.created,
			Name: vehicle.name,
			Model: vehicle.model,
			Class: vehicle.vehicle_class,
			Passengers: vehicle.passengers,
			favorite: false
		};
	});
};
