import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import { refs } from './refs';
import { dataMoreTen, onError } from './helpers';
import { addMarkup, markupClear } from './service';
import { createListCountry, createCountryMarkup } from './markup';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const getDateCountry = countryName => {
  if (countryName.length < 2) {
    return dataMoreTen();
  }

  fetchCountries(countryName)
    .then(country => {
      const newArray = country.splice(0, 10);
      if (newArray.length === 1) {
        addMarkup(createCountryMarkup(newArray));
      } else {
        addMarkup(createListCountry(newArray));
      }
    })
    .catch(onError);
};

const onChange = debounce(e => {
  e.preventDefault();

  const value = e.target.value.trim();
  if (!value) return markupClear();
  getDateCountry(value);
}, DEBOUNCE_DELAY);

refs.inputFetch.addEventListener('input', onChange);
