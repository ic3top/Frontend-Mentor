export default class Api {
  static async searchPerQuery(query) {
    try {
      const res = await fetch(`https://restcountries.eu/rest/v2/name/${query}?fields=name`);
      const data = await res.json();
      if (data.status <= 404 && data.status >= 400) {
        throw new Error(data.message);
      }
      return data;
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err.message);
      return [];
    }
  }

  static async getAllCountries() {
    const res = await fetch('https://restcountries.eu/rest/v2/all?fields=name;capital;population;region;flag;alpha3Code');
    const data = await res.json();
    return data;
  }

  static async getCountryByName(name) {
    const res = await fetch(`https://restcountries.eu/rest/v2/name/${name}?fields=name;capital;population;region;flag;alpha3Code`);
    const data = await res.json();
    return data;
  }

  static async getCountriesByRegion(regionName) {
    const res = await fetch(`https://restcountries.eu/rest/v2/region/${regionName}?fields=name;capital;population;region;flag;alpha3Code`);
    const data = await res.json();
    return data;
  }
}
