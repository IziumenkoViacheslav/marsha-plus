import { expect } from 'chai'
import { MarshaToken } from '../../typechain-types/contracts/MarshaPlus.sol/MarshaToken'
import { ethers } from 'hardhat'
import { Signer } from 'ethers'
import { time } from '@nomicfoundation/hardhat-network-helpers'

describe('Token contract', function () {
  let tokenInstance: MarshaToken
  let community: Signer
  let charity: Signer
  let foundation: Signer
  let development: Signer
  let marketing: Signer
  let investors: Signer
  let legal: Signer
  let expansion: Signer
  beforeEach(async () => {
    [community, charity, foundation, development, marketing, investors, legal, expansion] =
      await ethers.getSigners()
    console.log(await community.getAddress())

    const ContractFactory = await ethers.getContractFactory('MarshaToken')
    tokenInstance = await ContractFactory.deploy(
      await community.getAddress(),
      await charity.getAddress(),
      await foundation.getAddress(),
      await development.getAddress(),
      await marketing.getAddress(),
      await investors.getAddress(),
      await legal.getAddress(),
      await expansion.getAddress()
    )
  })
  it('should deploy the contract with the correct initial state', async () => {
    const totalSupply = await tokenInstance.totalSupply()
    expect(totalSupply.toString()).to.equal('8000000000000000000000000000')
  })
  it('should transfer tokens to the community address during deployment', async () => {
    const communityBalance = await tokenInstance.balanceOf(await community.getAddress())
    expect(communityBalance.toString()).to.equal('2800000000000000000000000000')
  })
  it('should transfer tokens to the charity address during deployment', async () => {
    const charityBalance = await tokenInstance.balanceOf(await charity.getAddress())
    expect(charityBalance.toString()).to.equal('400000000000000000000000000')
  })
  it('should transfer tokens to the foundation address during deployment', async () => {
    const foundationBalance = await tokenInstance.balanceOf(await foundation.getAddress())
    expect(foundationBalance.toString()).to.equal('400000000000000000000000000')
  })
  it('should transfer tokens to the development address during deployment', async () => {
    const developmentBalance = await tokenInstance.balanceOf(await development.getAddress())
    expect(developmentBalance.toString()).to.equal('400000000000000000000000000')
  })
  it('should transfer tokens to the marketing address during deployment', async () => {
    const marketingBalance = await tokenInstance.balanceOf(await marketing.getAddress())
    expect(marketingBalance.toString()).to.equal('400000000000000000000000000')
  })
  it('should transfer tokens to the investors address during deployment', async () => {
    const investorsBalance = await tokenInstance.balanceOf(await investors.getAddress())
    expect(investorsBalance.toString()).to.equal('400000000000000000000000000')
  })
  it('should transfer tokens to the legal address during deployment', async () => {
    const legalBalance = await tokenInstance.balanceOf(await legal.getAddress())
    expect(legalBalance.toString()).to.equal('200000000000000000000000000')
  })
  it('should transfer tokens to the expansion address during deployment', async () => {
    const expansionBalance = await tokenInstance.balanceOf(await expansion.getAddress())
    expect(expansionBalance.toString()).to.equal('80000000000000000000000000')
  })
  it('should prevent burning if community balance is less than half of initial tokens', async () => {
    const initialCommunityBalance = await tokenInstance.balanceOf(await community.getAddress())
    const communityInstanse = tokenInstance.connect(community)
    await communityInstanse.transfer(charity.getAddress(), initialCommunityBalance.div(2))
    const communityBalanceBeforeBurn = await tokenInstance.balanceOf(await community.getAddress())
    const developerInstanse = tokenInstance.connect(development)
    const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60
    const unlockTime = (await time.latest()) + ONE_YEAR_IN_SECS
    await time.increaseTo(unlockTime)
    await developerInstanse.transfer(charity.getAddress(), 1)
    const communityBalanceAfterBurn = await communityInstanse.balanceOf(
      await community.getAddress()
    )
    expect(communityBalanceBeforeBurn).to.equal(communityBalanceAfterBurn)
  })
  it('should prevent burning if not pass 1 year after contract deployment', async () => {
    const initialCommunityBalance = await tokenInstance.balanceOf(await community.getAddress())
    const communityInstanse = tokenInstance.connect(community)
    await communityInstanse.transfer(charity.getAddress(), initialCommunityBalance.div(3))
    const communityBalanceBeforeBurn = await tokenInstance.balanceOf(await community.getAddress())
    const developerInstanse = tokenInstance.connect(development)
    await developerInstanse.transfer(charity.getAddress(), 1)
    const communityBalanceAfterBurn = await communityInstanse.balanceOf(
      await community.getAddress()
    )
    expect(communityBalanceBeforeBurn).to.equal(communityBalanceAfterBurn)
  })
  it('should burning if community balance is more than half of initial tokens', async () => {
    const initialCommunityBalance = await tokenInstance.balanceOf(await community.getAddress())
    const communityInstanse = tokenInstance.connect(community)
    await communityInstanse.transfer(charity.getAddress(), initialCommunityBalance.div(3))
    const communityBalanceBeforeBurn = await tokenInstance.balanceOf(await community.getAddress())
    const developerInstanse = tokenInstance.connect(development)
    const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60
    const unlockTime = (await time.latest()) + ONE_YEAR_IN_SECS
    await time.increaseTo(unlockTime)
    await developerInstanse.transfer(charity.getAddress(), 1)
    const communityBalanceAfterBurn = await communityInstanse.balanceOf(
      await community.getAddress()
    )
    expect(communityBalanceBeforeBurn).to.not.equal(communityBalanceAfterBurn)
    expect(communityBalanceAfterBurn).to.equal('1626666666666666666666666667')
  })
  it('should prevent transfer rewards if 3 years not pass', async () => {
    const charityBalanceBeforeBurn = await tokenInstance.balanceOf(await charity.getAddress())
    const developerInstanse = tokenInstance.connect(development)
    await developerInstanse.transfer(community.getAddress(), 1)
    const charityBalanceAfterBurn = await tokenInstance.balanceOf(await charity.getAddress())
    expect(charityBalanceBeforeBurn).to.equal(charityBalanceAfterBurn)
  })
  it('should make transfer rewards if 3 years pass', async () => {
    const charityBalanceBeforeBurn = await tokenInstance.balanceOf(await charity.getAddress())
    const developerInstanse = tokenInstance.connect(development)
    const THREE_YEAR_IN_SECS = 1095 * 24 * 60 * 60
    const unlockTime = (await time.latest()) + THREE_YEAR_IN_SECS
    await time.increaseTo(unlockTime)
    await developerInstanse.transfer(community.getAddress(), 1)
    const charityBalanceAfterBurn = await tokenInstance.balanceOf(await charity.getAddress())
    expect(charityBalanceBeforeBurn).to.not.equal(charityBalanceAfterBurn)
    expect(charityBalanceAfterBurn).to.equal('2000000000000000000000000000')

    expect(await tokenInstance.balanceOf(await foundation.getAddress())).to.equal(
      '800000000000000000000000000'
    )
    expect(await tokenInstance.balanceOf(await development.getAddress())).to.equal(
      '799999999999999999999999999'
    )
    expect(await tokenInstance.balanceOf(await marketing.getAddress())).to.equal(
      '640000000000000000000000000'
    )
    expect(await tokenInstance.balanceOf(await legal.getAddress())).to.equal(
      '400000000000000000000000000'
    )
    expect(await tokenInstance.balanceOf(await expansion.getAddress())).to.equal(
      '160000000000000000000000000'
    )

  })
})
