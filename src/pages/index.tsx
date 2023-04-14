import { ethers } from 'ethers';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import MarshaPlus from '../../artifacts/contracts/MarshaPlus.sol/MarshaPlus.json';

declare global {
  interface Window {
    ethereum?: any;
  }
}

export default function Home() {
  const [contract, setContract] = useState<ethers.Contract>();
  const [address, setAddress] = useState('');
  const [walletTo, setWalletTo] = useState('');
  const [amount, setAmount] = useState<Number>();
  const [wallet, setWallet] = useState('');
  const [balance, setBalance] = useState('');
  const [signer, setSigner] = useState<ethers.Signer>();

  async function balanceOfWallet(wallet: string) {
    const result = await contract?.balanceOf(wallet);
    console.log({ result: Number(result) });
    setBalance(Number(result).toString());

    return Number(result);
  }
  async function transferToWallet() {
    if (!contract) {
      return null;
    }

    const transaction = contract && (await contract.transfer(address, amount));
  }
  async function connectToMetamask() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      setAddress(accounts[0]);
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(
        '0x5fbdb2315678afecb367f032d93f642f64180aa3',
        MarshaPlus.abi,
        provider.getSigner(0)
      );
      setContract(contract);
      const signer = provider.getSigner(accounts[0]);
      console.log({ signer });

      setSigner(signer);
      toast('connected to metamask');
    }
  }
  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-4'>
      <div className='flex flex-col w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
        <button
          className='border-black border-2 rounded-lg p-2'
          onClick={connectToMetamask}
        >
          connect to metamask
        </button>
        {address}
        wallet address
        <input
          className='m-2 p-2'
          type='text'
          onChange={(e) => setWalletTo(e.target.value)}
        />
        amount of tokens
        <input
          className='m-2 p-2'
          type='text'
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <button
          className='bg-blue-700 text-white rounded-lg p-2 m-2'
          onClick={transferToWallet}
        >
          transfer
        </button>
        balance of wallet
        <input
          className='m-2 p-2'
          type='text'
          onChange={(e) => setWallet(e.target.value)}
        />
        <button
          className='bg-blue-700 text-white p-2 rounded-lg'
          onClick={() => balanceOfWallet(wallet)}
        >
          checkBalance
        </button>
        {balance}
      </div>
    </div>
  );
}
