import { refs } from '../refs';

export const updateMarkup = (markup = '') => {
  refs.countryDetails.innerHTML = markup;
};
