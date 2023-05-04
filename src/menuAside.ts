import { mdiMonitor, mdiEthereum } from '@mdi/js'
import { MenuAsideItem } from './interfaces'

const menuAside: MenuAsideItem[] = [
  {
    href: '/dashboard',
    icon: mdiMonitor,
    label: 'Home',
  },
  {
    href: '/token',
    label: 'Token',
    icon: mdiEthereum,
  },
  {
    href: '/transfer',
    label: 'Transfer',
    icon: mdiEthereum,
  },
  {
    href: '/staking',
    label: 'Staking',
    icon: mdiEthereum,
  },
  {
    href: '/nfts',
    label: 'NFTs',
    icon: mdiEthereum,
  },
  {
    href: '/charity',
    label: 'Charity',
    icon: mdiEthereum,
  },
]

export default menuAside
