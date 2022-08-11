import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import { refs } from './refs';
import { dataMoreTen, onError } from './helpers';
import { updateMarkup } from './service';
import { createListCountry, createCountryMarkup } from './markup';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const getDateCountry = countryName => {
  fetchCountries(countryName)
    .then(country => {
      const newArray = country;
      if (newArray.length === 1) {
        updateMarkup(createCountryMarkup(newArray));
      } else if (newArray.length > 1 && newArray.length <= 10) {
        updateMarkup(createListCountry(newArray));
      } else {
        dataMoreTen();
      }
    })
    .catch(() => {
      onError();
      updateMarkup();
    });
};

const onChange = debounce(e => {
  e.preventDefault();
  updateMarkup();

  const value = e.target.value.trim();
  if (!value) return updateMarkup();
  getDateCountry(value);
}, DEBOUNCE_DELAY);

refs.inputFetch.addEventListener('input', onChange);
