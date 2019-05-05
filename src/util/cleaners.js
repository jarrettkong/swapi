export const cleanPeople = people => {
	return people.map(person => {
		return {
      'Name': person.name,
			'Species': person.species.name,
			'Homeworld': person.homeworld.name,
			'Population': person.homeworld.population,
			favorite: false
		};
	});
};

export const cleanPlanets = planets => {
	return planets.map(planet => {
		return {
      'Name': planet.name,
      'Population': planet.population,
      'Climate': planet.climate,
      'Terrain': planet.terrain,
      'Residents': planet.residents.join(', '),
			favorite: false
		};
	});
};

export const cleanVehicles = vehicles => {
	return vehicles.map(vehicle => {
		return {
      'Name': vehicle.name,
			'Model': vehicle.model,
			'Class': vehicle.class,
			'Passengers': vehicle.passengers,
			favorite: false
		};
	});
};
