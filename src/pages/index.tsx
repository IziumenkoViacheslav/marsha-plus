import { ethers } from 'ethers';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

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
      const provider = new ethers.BrowserProvider(window.ethereum);
      console.log(await provider.getNetwork());
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
