const Api = {
  basicUrl: 'https://restcountries.eu/rest/v2',
  async searchPerQuery(query) {
    try {
      const res = await fetch(`${this.basicUrl}/name/${query}?fields=name`);
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
  },

  async getAllCountries() {
    const res = await fetch(`${this.basicUrl}/all?fields=name;capital;population;region;flag;alpha3Code`);
    const data = await res.json();
    return data;
  },

  async getCountryByName(name) {
    const res = await fetch(`${this.basicUrl}/name/${name}?fields=name;capital;population;region;flag;alpha3Code`);
    const data = await res.json();
    return data;
  },

  async getCountriesByRegion(regionName) {
    const res = await fetch(`${this.basicUrl}/region/${regionName}?fields=name;capital;population;region;flag;alpha3Code`);
    const data = await res.json();
    return data;
  },

  async getDetailsByName(name) {
    const res = await fetch(`${this.basicUrl}/name/${name}?fields=name;nativeName;capital;population;region;flag;subregion;topLevelDomain;borders;currencies;languages;Alpha3Code`);
    const data = await res.json();
    data[0].borders = await Api.getNamesByCode(data[0].borders) || [];
    return data;
  },

  async getNamesByCode(codeArr) {
    if (codeArr.length === 0) return [];
    try {
      const res = await fetch(`${this.basicUrl}/alpha?codes=${codeArr.join(';')}`);
      const data = await res.json();
      return data?.map(({ name }) => name);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
      return [];
    }
  },
};

export default Api;
