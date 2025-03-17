export default class DataService {
  #page = 1
  #BASE_URL = 'https://api.magicthegathering.io/v1/cards'

  fetchData() {
    return fetch(`${this.#BASE_URL}?page=${this.#page}`)
    .then(res => res.json())
    .then(data => data.cards)
    .catch(err => console.error(err))
  }

  fetchNextPage() {
    this.#page++
    return this.fetchData()
  }

  fetchPrevPage() {
    this.#page -= this.#page >= 1 ? 1 : 0
    return this.fetchData()
  }
  
}