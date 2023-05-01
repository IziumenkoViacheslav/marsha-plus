import { ethers } from 'ethers'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import MarshaPlus from '../../artifacts/contracts/MarshaPlus.sol/MarshaPlus.json'

declare global {
  interface Window {
    ethereum?: any
  }
}

export default function Crypto() {
  const [contract, setContract] = useState<ethers.Contract>()
  const [address, setAddress] = useState('')
  const [balance, setBalance] = useState<number>()
  const [walletTo, setWalletTo] = useState('')
  const [amount, setAmount] = useState<number>()
  const [wallet, setWallet] = useState('')
  const [balanceAnotherAccount, setBalanceAnotherAccount] = useState<number>()
  const [signer, setSigner] = useState<ethers.Signer>()

  async function balanceOfWallet(wallet: string) {
    const result = await contract?.balanceOf(wallet)
    console.log({ result: Number(result) })
    setBalanceAnotherAccount(Number(result))

    return Number(result)
  }
  async function transferToWallet() {
    if (!contract) {
      return null
    }
    const transaction = contract && (await contract.transferTo(walletTo, amount))
    console.log({ transaction })
    const res = await transaction.wait()
    console.log({ res })
    setBalance(Number(await contract?.balanceOf(address)))
  }
  async function connectToMetamask() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      })
      setAddress(accounts[0])
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const contract = new ethers.Contract(
        '0x5fbdb2315678afecb367f032d93f642f64180aa3',
        MarshaPlus.abi,
        provider.getSigner(0)
      )
      setContract(contract)
      const signer = provider.getSigner(accounts[0])
      console.log({ signer })

      setSigner(signer)
      setBalance(Number(await contract?.balanceOf(accounts[0])))

      toast('connected to metamask', { style: { color: 'blue' } })
    }
  }
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-4 bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 bg-[size:400%] animate-dynamic-gradient">
      <div className="flex flex-col w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        {!address ? (
          <button className=" rounded-lg p-2 bg-blue-700 text-white" onClick={connectToMetamask}>
            connect to metamask
          </button>
        ) : (
          <>
            <div className="mt-24">
              Your wallet address is: <p className="inline text-lg font-bold">{address}</p>
            </div>
            <div className="m-4">
              with balance <p className="font-bold inline text-lg">{balance?.toString()}</p> MRA
              tokens
            </div>
            Transfer to another wallet
            <input
              className="m-2 p-2 rounded-lg"
              type="text"
              onChange={(e) => setWalletTo(e.target.value)}
            />
            amount of tokens
            <input
              className="m-2 p-2 rounded-lg"
              type="text"
              onChange={(e) => setAmount(Number(e.target.value))}
            />
            <button
              className="bg-blue-700 text-white rounded-lg p-2 m-2"
              onClick={transferToWallet}
            >
              transfer
            </button>
            balance of wallet
            <input
              className="m-2 p-2 rounded-lg"
              type="text"
              onChange={(e) => setWallet(e.target.value)}
            />
            <button
              className="bg-blue-700 text-white p-2 rounded-lg"
              onClick={() => balanceOfWallet(wallet)}
            >
              check balance
            </button>
            {balanceAnotherAccount?.toString()}
          </>
        )}
      </div>
    </div>
  )
}
