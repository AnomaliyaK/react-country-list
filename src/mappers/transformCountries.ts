import { Country, CountryApi } from '../types';

export const transformCountries = (countries: CountryApi[]): Country[] => {
  return countries.map(
    ({ flags, name, capital, region, area, population }) => ({
      flagImage: flags.svg,
      name: name.common,
      capital: capital[0],
      region: region,
      area: area,
      population: population,
    })
  );
};
