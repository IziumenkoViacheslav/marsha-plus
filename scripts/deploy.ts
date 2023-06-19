import { ethers } from 'hardhat'

async function main() {
  // const currentTimestampInSeconds = Math.round(Date.now() / 1000)
  // const unlockTime = currentTimestampInSeconds + 60;
  // const unlockTime = currentTimestampInSeconds + 9

  // const lockedAmount = ethers.utils.parseEther('0.001')

  const MarshaPlus = await ethers.getContractFactory('MarshaPlus')
  const gasPrice = await MarshaPlus.signer.getGasPrice()
  console.log(`Current gas price: ${gasPrice}`)

  const estimatedGas = await MarshaPlus.signer.estimateGas(MarshaPlus.getDeployTransaction())
  console.log(`Estimated gas: ${estimatedGas}`)

  const deploymentPrice = gasPrice.mul(estimatedGas)
  const deployerBalance = await MarshaPlus.signer.getBalance()
  console.log(`Deployer balance:  ${ethers.utils.formatEther(deployerBalance)}`)
  console.log(`Deployment price:  ${ethers.utils.formatEther(deploymentPrice)}`)
  if (deployerBalance.lt(deploymentPrice)) {
    throw new Error(
      `Insufficient funds. Top up your account balance by ${ethers.utils.formatEther(
        deploymentPrice.sub(deployerBalance)
      )}`
    )
  }
  await MarshaPlus.deploy()
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
