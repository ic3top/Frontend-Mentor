export class Api {
  static async short(url) {
    return fetch('https://api.shrtco.de/v2/shorten?url=' + url)
      .then(res => res.json());
  }
}