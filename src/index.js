import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import Notiflix from 'notiflix';
let debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;
const inputFetch = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('country-info');

const createListCountry = (data = []) => {
  return data
    .map(({ flags, name }) => {
      return `<li><img src="${flags.svg}" alt="flag" height="30" width="50"/><p>${name.common}</p></li>`;
    })
    .join('');
};

const createCountryMarku = (data = []) => {
  return data
    .map((flags, name, population, languages) => {
      return `<li>
        <img src="${flags.svg}" alt="flag" width="50" height="30" />
        <p><b>Capital:</b>${name.official}</p>
        <p><b>Population:</b>${population}</p>
        <p><b>Languages:</b>${languages}</p></li>`;
    })
    .join('');
};

const addMarkup = (markup = '', element) => {
  element.innerHTML = markup;
};

const getDateCountry = (countryName, addMarkup, createMarkup, element) => {
  if (countryName.length < 2) {
    return dataMoreTen();
  }
  debounce(
    fetchCountries(countryName).then(country => {
      const markup = createMarkup(country.splice());
      addMarkup(markup, element);
    }),
    DEBOUNCE_DELAY
  );
};

const dataMoreTen = e => {
  Notiflix.Notify.info(
    'Too many matches found. Please enter a more specific name.'
  );
};

const onChange = e => {
  e.preventDefault();

  const value = e.target.value.trim();
  if (!value) return;
  getDateCountry(value, addMarkup, createListCountry, countryList);
};

inputFetch.addEventListener('input', onChange);
