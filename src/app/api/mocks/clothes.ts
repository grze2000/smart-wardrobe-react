import { Clothing } from "../interfaces/Clothes"

let clothes: Clothing[] = [
  {
    id: '1',
    name: 'T-shirt',
    description: 'White cotton T-shirt with a round collar',
    type: 'top',
    materialThickness: 'thin',
    colors: ['white'],
    status: 'new',
    purchaseDate: '2023-07-05T10:00:00.000Z',
    value: 25,
    tagId: 'top001',
    photoUrl:
      'https://ae01.alicdn.com/kf/H0e288fca496e41f1bbc98ca0b0ef4a45u/Smutne-Glitch-Vintage-bluzy-dla-m-czyzn-Yung-Lean-estetyczne-Vaporwave-smutne-ch-opcy-bluzy-z.jpg_.webp',
  },
  {
    id: '2',
    name: 'Denim Jeans',
    description: 'Blue denim jeans with a slim fit cut',
    type: 'bottom',
    materialThickness: 'thick',
    colors: ['blue'],
    status: 'used',
    purchaseDate: '2023-07-01T12:00:00.000Z',
    value: 50,
    tagId: 'bottom001',
    photoUrl:
      'https://ae01.alicdn.com/kf/H0e288fca496e41f1bbc98ca0b0ef4a45u/Smutne-Glitch-Vintage-bluzy-dla-m-czyzn-Yung-Lean-estetyczne-Vaporwave-smutne-ch-opcy-bluzy-z.jpg_.webp',
  },
  {
    id: '3',
    name: 'Summer Dress',
    description: 'Light summer dress with a floral pattern',
    type: 'one piece',
    materialThickness: 'medium',
    colors: ['red', 'green', 'yellow'],
    status: 'new',
    purchaseDate: '2023-07-06T15:30:00.000Z',
    value: 75,
    tagId: 'onepiece001',
    photoUrl:
      'https://ae01.alicdn.com/kf/H0e288fca496e41f1bbc98ca0b0ef4a45u/Smutne-Glitch-Vintage-bluzy-dla-m-czyzn-Yung-Lean-estetyczne-Vaporwave-smutne-ch-opcy-bluzy-z.jpg_.webp',
  },
  {
    id: '4',
    name: 'Black Leather Jacket',
    description: 'Black leather jacket with zippers',
    type: 'outer',
    materialThickness: 'thick',
    colors: ['black'],
    status: 'used',
    purchaseDate: '2023-06-30T16:00:00.000Z',
    value: 150,
    tagId: 'outer001',
    photoUrl:
      'https://ae01.alicdn.com/kf/H0e288fca496e41f1bbc98ca0b0ef4a45u/Smutne-Glitch-Vintage-bluzy-dla-m-czyzn-Yung-Lean-estetyczne-Vaporwave-smutne-ch-opcy-bluzy-z.jpg_.webp',
  },
  {
    id: '5',
    name: 'Silk Scarf',
    description: 'Silk scarf with an abstract pattern',
    type: 'accessory',
    materialThickness: 'thin',
    colors: ['blue', 'pink', 'white'],
    status: 'new',
    purchaseDate: '2023-07-07T12:00:00.000Z',
    value: 40,
    tagId: 'accessory001',
    photoUrl:
      'https://ae01.alicdn.com/kf/H0e288fca496e41f1bbc98ca0b0ef4a45u/Smutne-Glitch-Vintage-bluzy-dla-m-czyzn-Yung-Lean-estetyczne-Vaporwave-smutne-ch-opcy-bluzy-z.jpg_.webp',
  },
  {
    id: '6',
    name: 'Knit Sweater',
    description: 'Cozy knit sweater in a lovely pastel color',
    type: 'top',
    materialThickness: 'thick',
    colors: ['pastel blue'],
    status: 'new',
    purchaseDate: '2023-07-02T10:00:00.000Z',
    value: 60,
    tagId: 'top002',
    photoUrl:
      'https://ae01.alicdn.com/kf/H0e288fca496e41f1bbc98ca0b0ef4a45u/Smutne-Glitch-Vintage-bluzy-dla-m-czyzn-Yung-Lean-estetyczne-Vaporwave-smutne-ch-opcy-bluzy-z.jpg_.webp',
  },
  {
    id: '7',
    name: 'Yoga Pants',
    description: 'Comfortable black yoga pants',
    type: 'bottom',
    materialThickness: 'medium',
    colors: ['black'],
    status: 'used',
    purchaseDate: '2023-07-03T14:00:00.000Z',
    value: 30,
    tagId: 'bottom002',
    photoUrl:
      'https://ae01.alicdn.com/kf/H0e288fca496e41f1bbc98ca0b0ef4a45u/Smutne-Glitch-Vintage-bluzy-dla-m-czyzn-Yung-Lean-estetyczne-Vaporwave-smutne-ch-opcy-bluzy-z.jpg_.webp',
  },
  {
    id: '8',
    name: 'Red Cocktail Dress',
    description: 'Stunning red cocktail dress for special occasions',
    type: 'one piece',
    materialThickness: 'medium',
    colors: ['red'],
    status: 'new',
    purchaseDate: '2023-07-07T16:00:00.000Z',
    value: 120,
    tagId: 'onepiece002',
    photoUrl:
      'https://ae01.alicdn.com/kf/H0e288fca496e41f1bbc98ca0b0ef4a45u/Smutne-Glitch-Vintage-bluzy-dla-m-czyzn-Yung-Lean-estetyczne-Vaporwave-smutne-ch-opcy-bluzy-z.jpg_.webp',
  },
  {
    id: '9',
    name: 'Winter Coat',
    description: 'Warm winter coat with a faux fur collar',
    type: 'outer',
    materialThickness: 'thick',
    colors: ['grey'],
    status: 'used',
    purchaseDate: '2023-07-01T10:00:00.000Z',
    value: 200,
    tagId: 'outer002',
    photoUrl:
      'https://ae01.alicdn.com/kf/H0e288fca496e41f1bbc98ca0b0ef4a45u/Smutne-Glitch-Vintage-bluzy-dla-m-czyzn-Yung-Lean-estetyczne-Vaporwave-smutne-ch-opcy-bluzy-z.jpg_.webp',
  },
  {
    id: '10',
    name: 'Beaded Necklace',
    description: 'Beautiful beaded necklace in earthy colors',
    type: 'accessory',
    materialThickness: 'medium',
    colors: ['brown', 'green', 'orange'],
    status: 'new',
    purchaseDate: '2023-07-06T13:00:00.000Z',
    value: 45,
    tagId: 'accessory002',
    photoUrl:
      'https://ae01.alicdn.com/kf/H0e288fca496e41f1bbc98ca0b0ef4a45u/Smutne-Glitch-Vintage-bluzy-dla-m-czyzn-Yung-Lean-estetyczne-Vaporwave-smutne-ch-opcy-bluzy-z.jpg_.webp',
  },
]

const clothesFromLocalStorage = localStorage.getItem('clothes')
if (clothesFromLocalStorage) {
  clothes = JSON.parse(clothesFromLocalStorage)
}

export { clothes }
