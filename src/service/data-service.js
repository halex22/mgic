export default class DataService {
  #page = 1
  #BASE_URL = 'https://api.magicthegathering.io/v1/cards'

  fetchData() {
    return fetch(`${this.#BASE_URL}?page=${this.#page}`)
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.error(err))
  }
  
}