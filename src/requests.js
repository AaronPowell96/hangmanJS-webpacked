const getPuzzle = async wordCount => {
  const response = await fetch(
    `//puzzle.mead.io/puzzle?wordCount=${wordCount}`
  );
  if (response.status === 200) {
    const data = await response.json();
    return data.puzzle;
  } else {
    throw new Error(`Unable to get puzzle`);
  }
};

// const getCountryDetails = async cCode => {
//   const response = await fetch("//restcountries.eu/rest/v2/all");
//   if (response.status === 200) {
//     const data = await response.json();
//     return data.find(country => country.alpha2Code === `${cCode}`);
//   } else {
//     throw new Error(`Eorrororor`);
//   }
// };

// http://ipinfo.io/json?token=1a11bd55cc8f9c

// const getLocation = async () => {
//   const response = await fetch("//ipinfo.io/json?token=1a11bd55cc8f9c");
//   if (response.status === 200) {
//     return await response.json();
//   } else {
//     throw new Error(`Lol`);
//   }
// };

// const getCurrentCountry = async () => {
//   const location = await getLocation();
//   return getCountryDetails(location.country);
//   //Same as storing await function and returning variable
// };
