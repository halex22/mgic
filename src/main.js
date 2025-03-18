import DataService from "./service/data-service.js";

const root = document.getElementById('root')
const service = new DataService()

async function getInitialData() {
  const data = await service.fetchData()
  console.log(data)
  data.forEach(card => render(card))
}

function render(cardInfo) {
  const mainContainer = document.createElement('div')
  mainContainer.classList.add('card-container')

  const img = document.createElement('img')
  img.src = cardInfo.imageUrl ?? '/public/fr7g5swymhc41.webp'
  img.classList.add('card-img')
  img.loading = 'lazy'


  const infoContainer = document.createElement('div')
  infoContainer.classList.add('card-info')
  infoContainer.classList.add('card-text')

  const cardName = document.createElement('h3')
  const nameText = document.createTextNode(cardInfo.name)
  cardName.appendChild(nameText)

  const details = document.createElement('div')
  details.classList.add('card-details')

  const type = document.createElement('span')
  const typeText = document.createTextNode(cardInfo.type)
  type.appendChild(typeText)

  const rarity = document.createElement('span')
  const rarityText = document.createTextNode(cardInfo.rarity)
  rarity.appendChild(rarityText)

  details.append(type, rarity)

  infoContainer.append(cardName, details)
  mainContainer.append(img, infoContainer)

  root.appendChild(mainContainer)
}

async function next() {
  cleanRoot()
  const data = await service.fetchNextPage()
  data.forEach(card => render(card))
}

async function prev() {
  cleanRoot()
  const data = await service.fetchPrevPage()
  data.forEach(card => render(card))
}

function cleanRoot(){
  root.innerHTML = ''
}

getInitialData()

window.next = next
window.prev = prev
