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
    href: '/token',
    label: 'Staking',
    icon: mdiEthereum,
  },
  {
    href: '/token',
    label: 'NFTs',
    icon: mdiEthereum,
  },
]

export default menuAside
