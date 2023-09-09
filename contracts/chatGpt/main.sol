// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';
import '@openzeppelin/contracts/access/Ownable.sol';

contract MarshaToken is ERC20, Ownable {
  // 80 billion tokens in wei
  uint256 public constant INITIAL_SUPPLY = 80000000000 * 10 ** 18;
  // uint256 public constant ANNUAL_BURN_RATE = 3; // 3% annual burn rate

  // uint256 public lastBurnTimestamp;
  uint256 public timeOfContractCreation;

  // event Transfer(address indexed from, address indexed to, uint256 value);
  // event Staking(uint256 amount);
  // event Reward(uint256 amount);

  address public constant community = 0x9586c9E43E74c6964aBbaE74B5C665b73C82BCc7;
  address public constant charity = 0x9586c9E43E74c6964aBbaE74B5C665b73C82BCc7;
  address public constant foundation = 0xf5aD63cD9a7a49Dd11e3704f8322Be656415BC72;
  address public constant development = 0xaBD95757Cb381ffEB69E0A764b2Fd4265f6e3453;
  address public constant marketing = 0xaBD95757Cb381ffEB69E0A764b2Fd4265f6e3453;
  address public constant investors = 0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc;
  address public constant legal = 0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc;
  address public constant expansion = 0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc;

  constructor() ERC20('MARSHA+', 'MSA') {
    // lastBurnTimestamp = block.timestamp;
    timeOfContractCreation = block.timestamp;

    _mint(address(this), INITIAL_SUPPLY);

    // community 35% all tokens are free
    _transfer(address(this), community, ((INITIAL_SUPPLY * 35) / 100));
    // Charity: 25% (20% locked, 5% free)
    _transfer(address(this), charity, ((INITIAL_SUPPLY * 5) / 100));
    // Foundation: 10% (5% locked, 5% free)
    _transfer(address(this), foundation, ((INITIAL_SUPPLY * 5) / 100));
    // Development: 10% (5% free, 5% locked)
    _transfer(address(this), development, ((INITIAL_SUPPLY * 5) / 100));
    // Marketing: 8% (5% free, 3% locked)
    _transfer(address(this), marketing, ((INITIAL_SUPPLY * 5) / 100));
    // Investors: 5% (free)
    _transfer(address(this), investors, ((INITIAL_SUPPLY * 5) / 100));
    // Legal: 5% (2.5% free, 2.5% locked)
    _transfer(address(this), legal, ((INITIAL_SUPPLY * 25) / 1000));
    // Expansion: 2% (1% free, 1% locked)
    _transfer(address(this), expansion, ((INITIAL_SUPPLY * 1) / 100));
  }

  // revard tokens for team after 3 years of lounch contract
  function teamRevardAfter3Years() internal {
    if (block.timestamp >= timeOfContractCreation + 1095 days) {
      _transfer(address(this), charity, ((INITIAL_SUPPLY * 20) / 100));

      _transfer(address(this), foundation, ((INITIAL_SUPPLY * 5) / 100));

      _transfer(address(this), development, ((INITIAL_SUPPLY * 5) / 100));

      _transfer(address(this), marketing, ((INITIAL_SUPPLY * 3) / 100));

      _transfer(address(this), legal, ((INITIAL_SUPPLY * 25) / 1000));

      _transfer(address(this), expansion, ((INITIAL_SUPPLY * 1) / 100));
    }
  }

  // Function to burn a percentage of total supply annually if needed
  // function burnIfNeeded() internal {
  //   if (block.timestamp >= lastBurnTimestamp + 365 days) {
  //     uint256 totalSupplyBeforeBurn = totalSupply();
  //     uint256 tokensToBurn = (totalSupplyBeforeBurn * ANNUAL_BURN_RATE) / 100;

  //     _burn(msg.sender, tokensToBurn);
  //     lastBurnTimestamp = block.timestamp;
  //   }
  // }

  // Override the ERC20 transfer function to perform burn check
  function transfer(address recipient, uint256 amount) public override returns (bool) {
    // burnIfNeeded();
    teamRevardAfter3Years();
    super.transfer(recipient, amount);
    return true;
  }

  // Override the ERC20 transferFrom function to perform burn check
  function transferFrom(
    address sender,
    address recipient,
    uint256 amount
  ) public override returns (bool) {
    // burnIfNeeded();
    teamRevardAfter3Years();
    super.transferFrom(sender, recipient, amount);
    return true;
  }

  // Function to manually trigger a burn
  function manualTimeTrigger() external onlyOwner {
    // burnIfNeeded();
    teamRevardAfter3Years();
  }
}
