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
  const [address, setAddress] = useState('');
  async function connectToMetamask() {
    if (window.ethereum) {
      console.log('connect');
      toast('connected to metamask');
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      console.log({ accounts });
      setAddress(accounts[0]);
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      console.log(await provider.getNetwork());
      const balance = await provider.getBalance(accounts[0]);
      console.log({ balance });
      const balanceInEther = ethers.utils.formatEther(balance);
      console.log({ balanceInEther });
      const contract = new ethers.Contract(
        '0x5fbdb2315678afecb367f032d93f642f64180aa3',
        MarshaPlus.abi,
        provider
      );
      console.log({ contract });
      console.log(await contract.address);
      console.log(
        Number(
          await contract.balanceOf('0x17F6AD8Ef982297579C203069C1DbfFE4348c372')
        )
      );
    }
  }
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
        <button
          className='border-black border-2 rounded-lg p-2'
          onClick={connectToMetamask}
        >
          connect to metamask
        </button>
        {address}
      </div>
    </main>
  );
}
