import React, { ReactNode, useState } from 'react'
import { mdiClose, mdiDotsVertical } from '@mdi/js'
import { containerMaxW } from '../config'
import BaseIcon from './BaseIcon'
import NavBarItemPlain from './NavBarItemPlain'
import NavBarMenuList from './NavBarMenuList'
import { MenuNavBarItem } from '../interfaces'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { toast } from 'react-hot-toast'
import { ethers } from 'ethers'
import MarshaPlus from '../../artifacts/contracts/MarshaPlus.sol/MarshaPlus.json'
import { useAppDispatch } from '../stores/hooks'
import { setContract } from '../stores/cryptoSlice'

type Props = {
  menu: MenuNavBarItem[]
  className: string
  children: ReactNode
}

export default function NavBar({ menu, className = '', children }: Props) {
  const dispatch = useAppDispatch()
  const [isMenuNavBarActive, setIsMenuNavBarActive] = useState(false)
  const [connectedToMetamask, setConnectedToMetamask] = useState(false)
  const router = useRouter()

  const handleMenuNavBarToggleClick = () => {
    setIsMenuNavBarActive(!isMenuNavBarActive)
  }
  async function connectToMetamask() {
    if (!window.ethereum) {
      toast('Install metamask!', { style: { color: 'red' } })
    }
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      })
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const contract = new ethers.Contract(
        '0x5fbdb2315678afecb367f032d93f642f64180aa3',
        MarshaPlus.abi,
        provider.getSigner(0)
      )
      dispatch(setContract(contract))
      toast('connected to metamask', { style: { color: 'blue' } })
      setConnectedToMetamask(true)
      router.push('/token')
    }
  }

  return (
    <nav
      className={`${className} top-0 inset-x-0 fixed bg-gray-50 h-14 z-30 transition-position w-screen lg:w-auto dark:bg-slate-800`}
    >
      <div className={`flex lg:items-stretch ${containerMaxW}`}>
        <div className="flex flex-1 items-stretch h-14">{children}</div>
        <div className="flex-none items-stretch flex h-14 lg:hidden">
          <NavBarItemPlain onClick={handleMenuNavBarToggleClick}>
            <BaseIcon path={isMenuNavBarActive ? mdiClose : mdiDotsVertical} size="24" />
          </NavBarItemPlain>
        </div>
        <div
          className={`${
            isMenuNavBarActive ? 'block' : 'hidden'
          } max-h-screen-menu overflow-y-auto lg:overflow-visible absolute w-screen top-14 left-0 bg-gray-50 shadow-lg lg:w-auto lg:flex lg:static lg:shadow-none dark:bg-slate-800`}
        >
          {/* <NavBarMenuList menu={menu} /> */}

          {!connectedToMetamask ? (
            <p className="p-4">Connect to metamask </p>
          ) : (
            <p className="p-4"> You already connected to metamask! :)</p>
          )}
          <Image
            alt={'metamask'}
            width={77}
            height={22}
            src={'./images/metamask_logo.png'}
            onClick={connectToMetamask}
            className="cursor-pointer"
          />
        </div>
      </div>
    </nav>
  )
}
