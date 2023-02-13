import React from 'react';
import { CountryList } from './components/CountryList';
import countries from './country-data.json';
import { transformCountries } from './mappers/transformCountries';
// import { CountryApi } from './types';

export const App = () => {
  const transformedCountries = transformCountries(countries);

  return (
    <div className="container">
      <h1>Country List</h1>
      <CountryList countryList={transformedCountries} />
    </div>
  );
};
