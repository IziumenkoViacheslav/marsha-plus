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

  address public constant community = 0xf1A3a5fd1DAEab3Df9da1B59361898f1E6C934AA;
  address public constant charity = 0x045a08a1C3d49cb80F6E37BD9B82eda7776e70BB;
  address public constant foundation = 0xBbB9dBC0E769E5934Da69f9e5EEA0526155fB5da;
  address public constant development = 0xFB22B7409EA071243fD1F98D05A11807DE0d002c;
  address public constant marketing = 0x94aDA1fA5F86124607bF2D860EA055b33588D65B;
  address public constant investors = 0x70d5155c8aEB6a0D6eA1F7dF13A73b44ce577aEB;
  address public constant legal = 0x2AFD6c9b1ee109614773E5f4ACe498564256b703;
  address public constant expansion = 0x2901a3cAb9A64e40BE94A2f2118C8ADb32710646;

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
