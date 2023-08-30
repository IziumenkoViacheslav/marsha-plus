// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0; // compiler version

import { SafeMath } from './SafeMath.sol';
import 'hardhat/console.sol';

contract MarshaPlus {
  using SafeMath for uint256;

  // uint256 public totalSupply = 8000000000; // 8 billion tokens
  string public token_name = 'MARSHA+'; // token name - human - readable
  string public token_symbol = 'MSA';
  uint8 public decimals = 18; // will set the divisibility of your token
  // TODO uncoment before pord!!!
  uint256 public totalSupply = 80000000000 * 10 ** decimals;
  // uint256 public totalSupply = 100; // for developing and testing, delete before deploy in prod

  address payable public owner; // Holds the owner of the token

  uint256 lastTimeBurned;

  mapping(address => uint256) public balanceOf;

  event Transfer(address indexed from, address indexed to, uint256 value);
  event Staking(uint256 amount);
  event Reward(uint256 amount);

  address public constant community = 0x9586c9E43E74c6964aBbaE74B5C665b73C82BCc7;
  address public constant foundation = 0xf5aD63cD9a7a49Dd11e3704f8322Be656415BC72;
  address public constant marketing = 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC;
  address public constant advisor = 0x90F79bf6EB2c4f870365E785982E1f101E93b906;
  address public constant developer = 0xaBD95757Cb381ffEB69E0A764b2Fd4265f6e3453;
  address public constant technical = 0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc;

  constructor() {
    lastTimeBurned = block.timestamp;
    balanceOf[community] = (totalSupply * 35) / 100;
    emit Transfer(msg.sender, community, balanceOf[community]);
    balanceOf[foundation] = (totalSupply * 25) / 100;
    balanceOf[marketing] = (totalSupply * 8) / 100;
    balanceOf[advisor] = totalSupply / 20;
    balanceOf[developer] = (totalSupply * 10) / 100;
    balanceOf[technical] = (totalSupply * 5) / 100;

    console.log('totalSupply', totalSupply);
  }

  function transferTo(address _to, uint256 _value) public returns (bool success) {
    uint256 senderBalance = balanceOf[msg.sender];
    uint256 receiverBalance = balanceOf[_to];

    require(_to != address(0), 'Receiver address invalid');
    require(_to != msg.sender, 'Receiver address invalid');
    require(_value >= 0, 'Value must be greater or equal to 0');
    require(senderBalance > _value, 'Not enough balance');

    balanceOf[msg.sender] = senderBalance.sub(_value);
    balanceOf[_to] = receiverBalance.add(_value);

    emit Transfer(msg.sender, _to, _value);
    burn();
    return true;
  }

  function burn() private returns (bool success) {
    uint256 burnThreePersentTotalSupply = totalSupply.mul(3).div(100);
    if (
      // TODO: uncoment before prod!!
      // block.timestamp > (lastTimeBurned + (365 days)) &&
      (block.timestamp > block.timestamp.add(10 seconds)) &&
      (balanceOf[community] > burnThreePersentTotalSupply)
    ) {
      balanceOf[community] = balanceOf[community].sub(burnThreePersentTotalSupply);
      totalSupply = totalSupply.sub(burnThreePersentTotalSupply);
      emit Transfer(community, address(0), burnThreePersentTotalSupply);
      lastTimeBurned = block.timestamp;
    }

    return true;
  }

  // -------------------------------------staking start-------------------------------------
  struct DateNumbersOfTokens {
    uint256 date;
    uint256 tokens;
  }
  DateNumbersOfTokens dateNumbersOfTokens;

  mapping(address => mapping(string => DateNumbersOfTokens)) public stakingByPeriod;

  // {
  //   address: {
  //     YEAR: {date: 17.07.2023, amount: 1},
  //     HALF_YEAR: {date: 17.07.2023, amount: 1},
  //     YEAR_AND_HALF: {date: 17.07.2023, amount: 1}
  //   }
  // }

  function depositTokenToStaking(uint _amount, string memory _period) public returns (bool) {
    require(balanceOf[msg.sender] >= _amount, 'You have not enough tokens');
    require(
      !(stakingByPeriod[msg.sender][_period].tokens > 0),
      'You already have staking on that _period'
    );
    require(
      (keccak256(bytes(_period)) == keccak256(bytes('HALF_YEAR'))) ||
        (keccak256(bytes(_period)) == keccak256(bytes('YEAR'))) ||
        (keccak256(bytes(_period)) == keccak256(bytes('YEAR_AND_HALF'))),
      'Period must be HALF_YEAR, YEAR or YEAR_AND_HALF'
    );

    balanceOf[msg.sender] = balanceOf[msg.sender].sub(_amount);
    stakingByPeriod[msg.sender][_period] = DateNumbersOfTokens(block.timestamp, _amount);
    balanceOf[community] = balanceOf[community].add(_amount);
    emit Staking(_amount);
    return true;
  }

  function withdrawTokenFromStaking(string memory period) public returns (uint tokens) {
    require(
      (keccak256(bytes(period)) == keccak256(bytes('HALF_YEAR'))) ||
        (keccak256(bytes(period)) == keccak256(bytes('YEAR'))) ||
        (keccak256(bytes(period)) == keccak256(bytes('YEAR_AND_HALF'))),
      'Period must be HALF_YEAR, YEAR or YEAR_AND_HALF'
    );

    if (keccak256(bytes(period)) == keccak256(bytes('HALF_YEAR'))) {
      // TODO uncoment before prod
      //  require(block.timestamp > stakingByPeriod[msg.sender][period].date.add(132 days));
      require(
        block.timestamp > stakingByPeriod[msg.sender][period].date.add(6 minutes),
        'Not enough time pass for withdraw staking'
      );
      uint8 persentageHalfYear = 3;

      uint256 tokenNeedToPay = stakingByPeriod[msg.sender][period]
        .tokens
        .mul(persentageHalfYear)
        .div(100)
        .add(stakingByPeriod[msg.sender][period].tokens);

      balanceOf[community] = balanceOf[community].sub(tokenNeedToPay);

      balanceOf[msg.sender] = balanceOf[msg.sender].add(tokenNeedToPay);

      delete stakingByPeriod[msg.sender][period];
      emit Reward(tokenNeedToPay);
      return tokenNeedToPay;
    }

    if (keccak256(bytes(period)) == keccak256(bytes('YEAR'))) {
      // TODO uncoment before prod
      //  require(block.timestamp > stakingByPeriod[msg.sender][period].date.add(365 days));
      require(
        block.timestamp > stakingByPeriod[msg.sender][period].date.add(12 minutes),
        'Not enough time pass for withdraw staking'
      );
      uint8 persentaeYear = 5;

      uint256 tokenNeedToPay = stakingByPeriod[msg.sender][period]
        .tokens
        .mul(persentaeYear)
        .div(100)
        .add(stakingByPeriod[msg.sender][period].tokens);

      balanceOf[community] = balanceOf[community].sub(tokenNeedToPay);

      balanceOf[msg.sender] = balanceOf[msg.sender].add(tokenNeedToPay);

      delete stakingByPeriod[msg.sender][period];
      return tokenNeedToPay;
    }

    if (keccak256(bytes(period)) == keccak256(bytes('YEAR_AND_HALF'))) {
      // TODO uncoment before prod
      //  require(block.timestamp > stakingByPeriod[msg.sender][period].date.add(548 days));
      require(
        block.timestamp > stakingByPeriod[msg.sender][period].date.add(12 minutes),
        'Not enough time pass for withdraw staking'
      );
      uint8 persentaeYearAndHalf = 8;

      uint256 tokenNeedToPay = stakingByPeriod[msg.sender][period]
        .tokens
        .mul(persentaeYearAndHalf)
        .div(100)
        .add(stakingByPeriod[msg.sender][period].tokens);

      balanceOf[community] = balanceOf[community].sub(tokenNeedToPay);

      balanceOf[msg.sender] = balanceOf[msg.sender].add(tokenNeedToPay);

      delete stakingByPeriod[msg.sender][period];
      return tokenNeedToPay;
    }
  }

  // -------------------------------------staking end-------------------------------------

  function swaping(uint _amount1, uint _amount2) public returns (bool) {
    return true;
  }

  function kill() public {
    require(msg.sender == developer);
    selfdestruct(payable(developer));
  }
}
