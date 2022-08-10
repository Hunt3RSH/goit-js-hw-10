export const createListCountry = (data = []) => {
  return data
    .map(({ flags, name }) => {
      return `<li><img src="${flags.svg}" alt="flag" height="30" width="50"/><p>${name.common}</p>`;
    })
    .join('');
};

export const createCountryMarkup = (data = []) => {
  return data
    .map(({ capital, flags, name, population, languages }) => {
      return `
      <p class="title"><img src="${
        flags.svg
      }" alt="flag" width="50" height="30" /> ${name.official}</p>
        
        <p><b>Capital:</b> ${capital}</p>
        <p><b>Population:</b> ${population}</p>
        <p><b>Languages:</b> ${Object.values(languages)}</p>`;
    })
    .join('');
};
