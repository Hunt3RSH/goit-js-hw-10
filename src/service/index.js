import { refs } from '../refs';

export const addMarkup = (markup = '') => {
  refs.countryDetails.innerHTML = markup;
};

export const markupClear = () => {
  refs.countryDetails.innerHTML = '';
};
