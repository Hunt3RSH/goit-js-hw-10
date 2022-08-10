const BASE_URL = 'https://restcountries.com/v3.1/name/';
const FILTER_RESPONSE = '?fields=name,capital,population,flags,languages';

export const fetchCountries = name => {
  return fetch(BASE_URL + name + FILTER_RESPONSE).then(country => {
    if (country.ok) {
      return country.json();
    }
    throw new Error(country.statusText);
  });
};
