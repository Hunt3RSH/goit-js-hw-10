import Notiflix from 'notiflix';

export const dataMoreTen = e => {
  Notiflix.Notify.info(
    'Too many matches found. Please enter a more specific name.'
  );
};

export const onError = e => {
  Notiflix.Notify.failure('Oops, there is no country with that name');
};
