const ethers = require('ethers')
const wallet = ethers.Wallet.createRandom()
console.log('address: \n', wallet.address)
console.log('mnemonic: \n', wallet.mnemonic.phrase)
console.log('privateKey: \n', wallet.privateKey)
export {}
