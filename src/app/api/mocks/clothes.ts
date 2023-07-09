import { Clothing } from "../interfaces/Clothes"

let clothes: Clothing[] = [
  {
    id: '1',
    name: 'T-shirt elektronika',
    description: 'White cotton T-shirt with a round collar',
    type: 'tshirts',
    materialThickness: 'thin',
    colors: ['green', 'white'],
    status: 'new',
    purchaseDate: '2023-07-05T10:00:00.000Z',
    value: 25,
    tagId: 'top001',
    photoUrl:
      'https://ae01.alicdn.com/kf/Hc184c2d5ee9f4b47830291e07d6110a7p/Procesor-komputera-rdze-T-Shirt-z-sercem-m-ska-GEEK-Nerd-Freak-haker-komputer-dla-graczy.jpg_640x640.jpg',
  },
  {
    id: '2',
    name: 'Bluza na trudny czas',
    description: 'Bluza na trudny czas',
    type: 'bluzy',
    materialThickness: 'thick',
    colors: ['#000000', 'white'],
    status: 'used',
    purchaseDate: '2023-07-01T12:00:00.000Z',
    value: 50,
    tagId: 'bottom001',
    photoUrl:
      'https://ae01.alicdn.com/kf/H0e288fca496e41f1bbc98ca0b0ef4a45u/Smutne-Glitch-Vintage-bluzy-dla-m-czyzn-Yung-Lean-estetyczne-Vaporwave-smutne-ch-opcy-bluzy-z.jpg_.webp',
  },
  {
    id: '3',
    name: 'T-shirt informatyczny',
    description: '',
    type: 'tshirts',
    materialThickness: 'medium',
    colors: ['black', 'white', 'yellow'],
    status: 'new',
    purchaseDate: '2023-07-06T15:30:00.000Z',
    value: 75,
    tagId: 'onepiece001',
    photoUrl:
      'https://ae01.alicdn.com/kf/H79863e2e64144db5a658ce9c1dda999dq/Nie-martw-si-przetestujemy-to-w-produkcji-cz-owiek-TShirt-oprogramowanie-programista-to-programista-Geek-O.jpg_.webp',
  },
  {
    id: '4',
    name: 'Bluza cienka - wilki',
    description: '',
    type: 'bluzy',
    materialThickness: 'thick',
    colors: ['#5a2f13'],
    status: 'used',
    purchaseDate: '2023-06-30T16:00:00.000Z',
    value: 150,
    tagId: 'outer001',
    photoUrl:
      'https://ae01.alicdn.com/kf/HTB1bpYBUVzqK1RjSZFvq6AB7VXap/BIANYILONG-2018-nowy-3d-zwierz-t-bluzy-Streetwear-m-skie-bluzy-wilk-drukowane-swetry-Unisex-Harajuku.jpg_640x640.jpg',
  },
  {
    id: '5',
    name: 'Buty sportowe',
    description: '',
    type: 'buty',
    materialThickness: 'thin',
    colors: ['#8ecad5', 'black', 'white'],
    status: 'new',
    purchaseDate: '2023-07-07T12:00:00.000Z',
    value: 40,
    tagId: 'accessory001',
    photoUrl:
      'https://b2bcdn.aza.moda/pdp-gallery-lg/31/00/00/24/11/3100002411594/4.jpg',
  },
  {
    id: '6',
    name: 'Buty sportowe czarne',
    description: '',
    type: 'buty',
    materialThickness: 'thick',
    colors: ['black'],
    status: 'new',
    purchaseDate: '2023-07-02T10:00:00.000Z',
    value: 60,
    tagId: 'top002',
    photoUrl:
      'https://b2bcdn.aza.moda/pdp-gallery-lg/31/00/00/21/03/3100002103574/4.jpg',
  },
  {
    id: '7',
    name: 'Koszula granatowa',
    description: '',
    type: 'koszule',
    materialThickness: 'medium',
    colors: ['#2e365a'],
    status: 'used',
    purchaseDate: '2023-07-03T14:00:00.000Z',
    value: 30,
    tagId: 'bottom002',
    photoUrl:
      'https://a.allegroimg.com/s512/11ae12/4259fd604dc188b10e609ca363bf/KOSZULA-MESKA-WE-WZORY-Z-DLUGIM-REKAWEM-roz-XL',
  },
  {
    id: '8',
    name: 'Spodenki dresowe',
    description: '',
    type: 'spodenki',
    materialThickness: 'medium',
    colors: ['#666666'],
    status: 'new',
    purchaseDate: '2023-07-07T16:00:00.000Z',
    value: 120,
    tagId: 'onepiece002',
    photoUrl:
      'https://a.allegroimg.com/s512/11654e/9b04626b45df87213eedd326543e/KROTKIE-SPODENKI-DRESOWE-MESKIE-KOLORY-gladkie-XXL-Wzor-dominujacy-bez-wzoru',
  },
  {
    id: '9',
    name: 'Czapka z daszkiem',
    description: '',
    type: 'czapki',
    materialThickness: 'thick',
    colors: ['#223f7e'],
    status: 'used',
    purchaseDate: '2023-07-01T10:00:00.000Z',
    value: 200,
    tagId: 'outer002',
    photoUrl:
      'https://a.allegroimg.com/s512/116989/20631c414f1ca3615b091d2baf3c/Czapka-bejsbolowka-bawelniana-z-daszkiem-Rozmiar-uniwersalny',
  },
  {
    id: '10',
    name: 'Jeansy',
    description: '',
    type: 'dżinsy',
    materialThickness: 'medium',
    colors: ['#544b45'],
    status: 'new',
    purchaseDate: '2023-07-06T13:00:00.000Z',
    value: 45,
    tagId: 'accessory002',
    photoUrl:
      'https://a.allegroimg.com/s512/11e133/265d06c44034b1709c1ad9e2e0c8/Spodnie-meskie-jeansy-W35-90cm-oliwkowe-dzinsy-Marka-inna',
  },
]

const clothesFromLocalStorage = localStorage.getItem('clothes')
if (clothesFromLocalStorage) {
  clothes = JSON.parse(clothesFromLocalStorage)
}

export { clothes }
