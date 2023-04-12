declare global {
  interface Window {
    ethereum?: any;
  }
}

export default function Home() {
  async function connectToMetamask() {
    if (window.ethereum) {
      console.log('connect');
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      console.log({ accounts });
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
      </div>
    </main>
  );
}
