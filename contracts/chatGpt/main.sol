// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';
import '@openzeppelin/contracts/access/Ownable.sol';

contract MarshaToken is ERC20, Ownable {
  uint256 public constant INITIAL_SUPPLY = 80000000000 * 10 ** 18; // 80 billion tokens
  uint256 public constant ANNUAL_BURN_RATE = 3; // 3% annual burn rate

  uint256 public lastBurnTimestamp;

  // event Transfer(address indexed from, address indexed to, uint256 value);
  event Staking(uint256 amount);
  event Reward(uint256 amount);

  constructor() ERC20('MARSHA+ Token', 'MSA') {
    _mint(msg.sender, INITIAL_SUPPLY);
    lastBurnTimestamp = block.timestamp;
  }

  // Function to burn a percentage of total supply annually if needed
  function burnIfNeeded() internal {
    if (block.timestamp >= lastBurnTimestamp + 365 days) {
      uint256 totalSupplyBeforeBurn = totalSupply();
      uint256 tokensToBurn = (totalSupplyBeforeBurn * ANNUAL_BURN_RATE) / 100;

      _burn(msg.sender, tokensToBurn);
      lastBurnTimestamp = block.timestamp;
    }
  }

  // Override the ERC20 transfer function to perform burn check
  function transfer(address recipient, uint256 amount) public override returns (bool) {
    burnIfNeeded();
    super.transfer(recipient, amount);
    return true;
  }

  // Override the ERC20 transferFrom function to perform burn check
  function transferFrom(
    address sender,
    address recipient,
    uint256 amount
  ) public override returns (bool) {
    burnIfNeeded();
    super.transferFrom(sender, recipient, amount);
    return true;
  }

  // Function to manually trigger a burn
  function manualBurn() external onlyOwner {
    burnIfNeeded();
  }
}
