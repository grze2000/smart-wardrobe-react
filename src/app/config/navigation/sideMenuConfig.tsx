import { r } from 'app/router'
import { NavigationConfigItem } from './userMenuConfig'
import { BsFillPeopleFill } from 'react-icons/bs'
import { GiConverseShoe, GiHoodie, GiMonclerJacket, GiOutbackHat, GiPirateCoat, GiShorts, GiSkirt, GiTrousers, GiWinterGloves } from 'react-icons/gi'
import { PiDressFill, PiShirtFoldedFill } from 'react-icons/pi'
import { FaTshirt } from 'react-icons/fa'
import { BiSolidTShirt } from 'react-icons/bi'

export const sideMenuConfig: NavigationConfigItem[] = [
  {
    type: 'item',
    label: 'Kategorie',
  },
  {
    type: 'item',
    value: 'bluzy',
    icon: GiHoodie,
    label: 'Bluzy'
  },
  {
    type: 'item',
    value: 'spodnie',
    icon: GiTrousers,
    label: 'Spodnie'
  },
  {
    type: 'item',
    value: 'koszule',
    icon: PiShirtFoldedFill,
    label: 'Koszule'
  },
  {
    type: 'item',
    value: 'sukienki',
    icon: PiDressFill,
    label: 'Sukienki'
  },
  {
    type: 'item',
    value: 'tshirts',
    icon: FaTshirt,
    label: 'T-shirty'
  },
  {
    type: 'item',
    value: 'kurtki',
    icon: GiMonclerJacket,
    label: 'Kurtki'
  },
  {
    type: 'item',
    value: 'garnitury',
    icon: BsFillPeopleFill,
    label: 'Garnitury'
  },
  {
    type: 'item',
    value: 'spodnice',
    icon: GiSkirt,
    label: 'Spódnice'
  },
  {
    type: 'item',
    value: 'buty',
    icon: GiConverseShoe,
    label: 'Buty'
  },
  {
    type: 'item',
    value: 'czapki',
    icon: GiOutbackHat,
    label: 'Czapki'
  },
  {
    type: 'item',
    value: 'rekawiczki',
    icon: GiWinterGloves,
    label: 'Rękawiczki'
  },
  {
    type: 'item',
    value: 'plaszcze',
    icon: GiPirateCoat,
    label: 'Płaszcze'
  },
  {
    type: 'item',
    value: 'dzinsy',
    icon: GiTrousers,
    label: 'Dżinsy'
  },
  {
    type: 'item',
    value: 'bluzki',
    icon: BiSolidTShirt,
    label: 'Bluzki'
  },
  {
    type: 'item',
    value: 'spodenki',
    icon: GiShorts,
    label: 'Spodenki'
  }
]
