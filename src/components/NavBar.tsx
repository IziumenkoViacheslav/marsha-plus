import React, { ReactNode, useState } from 'react'
import { mdiClose, mdiDotsVertical } from '@mdi/js'
import { containerMaxW } from '../config'
import BaseIcon from './BaseIcon'
import NavBarItemPlain from './NavBarItemPlain'
import { MenuNavBarItem } from '../interfaces'
import Image from 'next/image'
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
  const [wallet, setWallet] = useState('')
  const [balance, setBalance] = useState<string>()

  const handleMenuNavBarToggleClick = () => {
    setIsMenuNavBarActive(!isMenuNavBarActive)
  }
  async function connectToMetamask() {
    if (!window.ethereum) {
      toast('Install metamask!', { style: { color: 'red' } })
    }
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        })
        setWallet(accounts[0])
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const { name: networkName, chainId } = await provider.getNetwork()
        console.log({ networkName })
        console.log({ chainId })
        if (process.env.NODE_ENV === 'development' && chainId !== 31337) {
          toast('switch your network to localhost', { style: { color: 'red' } })
        }
        if (process.env.NODE_ENV !== 'development' && chainId !== 97) {
          toast('switch your network to binance network', { style: { color: 'red' } })
        }

        const contractAddress =
          process.env.NODE_ENV === 'development'
            ? '0x5fbdb2315678afecb367f032d93f642f64180aa3' // hardhat
            : '0x1a6E420cA1aBC5DC12A677382ACebE906161A8EF' // binance test network
        console.log({ contractAddress })

        const contract = new ethers.Contract(contractAddress, MarshaPlus.abi, provider.getSigner(0))
        dispatch(setContract(contract))

        const walletBalanceInWei = (await contract?.balanceOf(wallet))?.toString()
        console.log({ walletBalanceInWei })
        const walletBalanceInEth = ethers.utils.formatEther(walletBalanceInWei)

        const walletBalanceInEthRounded = walletBalanceInEth.match(/[0-9]{1,}.[0-9]{2}/)
        console.log({ walletBalanceInEthRounded })
        if (!walletBalanceInEthRounded.length) {
          toast('cannot get balance of wallet', { style: { color: 'red' } })
        }

        setBalance(walletBalanceInEthRounded[0])

        toast('connected to metamask', { style: { color: 'blue' } })
        setConnectedToMetamask(true)
      } catch (error) {
        toast(error.message)
      }
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
          {!connectedToMetamask ? (
            <div className="flex flex-row justify-center">
              <p className="p-4 cursor-pointer hover:underline" onClick={connectToMetamask}>
                Connect to metamask
              </p>
              <Image
                alt={'metamask'}
                width={44}
                height={22}
                src={'./images/MetaMask_Fox.svg'}
                onClick={connectToMetamask}
                className="cursor-pointer"
              />
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row">
              {/* <p className="p-4"> You already connected to metamask! :)</p> */}
              <p className="pl-7 text-xs lg:p-4 lg:text-base">Wallet: </p>
              <p className="pl-7 text-xs lg:p-4 lg:text-base text-green-500">{`${wallet}`}</p>
              <p className="pl-7 text-xs lg:p-4 lg:text-base">balance: </p>
              <p className="pl-7 text-xs lg:p-4 lg:text-base text-green-500 mb-4">{` ${balance} MRA`}</p>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
