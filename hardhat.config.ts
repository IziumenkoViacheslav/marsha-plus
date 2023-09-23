import { HardhatUserConfig } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'

// import { mnemonic } from './secret.json'

const config: HardhatUserConfig = {
  solidity: '0.8.18',
  defaultNetwork: 'hardhat',
  networks: {
    local: {
      url: 'http://127.0.0.1:8545/',
      chainId: 31337,
      allowUnlimitedContractSize: true,
      timeout: 1800000,
    },
    // testnet: {
    //   url: 'https://data-seed-prebsc-1-s1.binance.org:8545',
    //   chainId: 97,
    //   gasPrice: 20000000000,
    //   accounts: { mnemonic: mnemonic },
    // },
    // mainnet: {
    //   url: 'https://bsc-dataseed.binance.org/',
    //   chainId: 56,
    //   gasPrice: 20000000000,
    //   accounts: { mnemonic: mnemonic },
    // },
  },
  paths: {
    tests: "./contracts/test",
  }
}

export default config
