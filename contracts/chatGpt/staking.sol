// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC20/IERC20.sol';

contract Staking {
  IERC20 public token;
  address public owner;
  uint256 public stakingEndTime;
  uint256 public totalStaked;
  mapping(address => uint256) public stakedBalances;

  constructor(address _token, uint256 _stakingDurationInDays) {
    token = IERC20(_token);
    owner = msg.sender;
    stakingEndTime = block.timestamp + (_stakingDurationInDays * 1 days);
  }

  function stake(uint256 amount) external {
    require(block.timestamp < stakingEndTime, 'Staking period has ended.');
    token.transferFrom(msg.sender, address(this), amount);
    stakedBalances[msg.sender] += amount;
    totalStaked += amount;
  }

  function unstake() external {
    require(block.timestamp >= stakingEndTime, 'Staking period has not ended yet.');
    uint256 stakedAmount = stakedBalances[msg.sender];
    require(stakedAmount > 0, 'No tokens to unstake.');
    uint256 reward = (stakedAmount * 5) / 100; // 5% reward
    token.transfer(msg.sender, stakedAmount + reward);
    stakedBalances[msg.sender] = 0;
    totalStaked -= stakedAmount;
  }
}
