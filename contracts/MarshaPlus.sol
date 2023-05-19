// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0; // compiler version

import { SafeMath } from './SafeMath.sol';
import 'hardhat/console.sol';

contract MarshaPlus {
  using SafeMath for uint256;

  // uint256 public totalSupply = 8000000000; // 8 billion tokens
  string public token_name = 'MARSHA+'; // token name - human - readable
  string public token_symbol = 'MRA';
  // uint256 public totalSupply = 80000000000000 * 10 ** 18; TODO uncoment before pord!!!
  uint256 public totalSupply = 100; // for developing and testing, delete before deploy in prod
  uint8 public decimals = 18; // will set the divisibility of your token

  address payable public owner; // Holds the owner of the token

  uint256 lastTimeBurned;

  mapping(address => uint256) public balanceOf;

  event Transfer(address indexed from, address indexed to, uint256 value);

  address public constant community = 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266;
  address public constant foundation = 0x70997970C51812dc3A010C7d01b50e0d17dc79C8;
  address public constant marketing = 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC;
  address public constant advisor = 0x90F79bf6EB2c4f870365E785982E1f101E93b906;
  address public constant developer = 0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65;
  address public constant technical = 0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc;

  constructor() {
    lastTimeBurned = block.timestamp;
    // community = msg.sender;
    balanceOf[community] = (totalSupply * 35) / 100;
    emit Transfer(msg.sender, community, balanceOf[community]);
    balanceOf[foundation] = (totalSupply * 25) / 100;
    balanceOf[marketing] = (totalSupply * 8) / 100;
    balanceOf[advisor] = totalSupply / 20;
    balanceOf[developer] = (totalSupply * 10) / 100;
    balanceOf[technical] = (totalSupply * 5) / 100;

    // emit Transfer(msg.sender, companion, totalSupply / 2);
    // emit Transfer(msg.sender, developer, totalSupply / 10);
  }

  function transferTo(address _to, uint256 _value) public returns (bool success) {
    uint256 senderBalance = balanceOf[msg.sender];
    uint256 receiverBalance = balanceOf[_to];

    require(_to != address(0), 'Receiver address invalid');
    require(_to != msg.sender, 'Receiver address invalid');
    require(_value >= 0, 'Value must be greater or equal to 0');
    require(senderBalance > _value, 'Not enough balance');

    // balanceOf[msg.sender] = senderBalance - _value;
    balanceOf[msg.sender] = senderBalance.sub(_value);
    // balanceOf[_to] = receiverBalance + _value;
    balanceOf[_to] = receiverBalance.add(_value);

    emit Transfer(msg.sender, _to, _value);
    burn();
    return true;
  }

  function burn() private returns (bool success) {
    // uint256 burnThreePersentTotalSupply = (totalSupply * 3) / 100;
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

  enum TypeOfStaking {
    HALF_YEAR,
    YEAR,
    YEAR_AND_HALF
  }

  // struct {date: numbersForTokents}
  struct DateNumbersOfTokens {
    uint256 date;
    uint256 tokens;
    TypeOfStaking typeOfStaking;
  }
  DateNumbersOfTokens dateNumbersOfTokens;

  mapping(address => DateNumbersOfTokens) public stakingFromWalletDate;

  function depositTokenToStaking(uint _tokens, TypeOfStaking choice) public returns (bool) {
    console.log('choise');
    require(balanceOf[msg.sender] >= _tokens, 'You have not enough tokens');
    require(
      !(stakingFromWalletDate[msg.sender].tokens > 0) &&
        !(stakingFromWalletDate[msg.sender].typeOfStaking == choice),
      'You already have staking'
    );
    balanceOf[msg.sender] = balanceOf[msg.sender].sub(_tokens);
    stakingFromWalletDate[msg.sender] = DateNumbersOfTokens(block.timestamp, _tokens, choice);
    balanceOf[community] = balanceOf[community].add(_tokens);
    return true;
  }

  function withdrawTokenFromStaking() public returns (bool) {
    uint8 stakingPersentage = 7;
    uint256 stakingSumm = stakingFromWalletDate[msg.sender].tokens.mul(stakingPersentage).div(100);
    // TODO unkoment before prod!!!
    // require((block.timestamp > stakingFromWalletDate[msg.sender].date.add(365 days), 'Not enough time pass for withdraw staking');
    require(
      block.timestamp > stakingFromWalletDate[msg.sender].date.add(10 seconds),
      'Not enough time pass for withdraw staking'
    );
    balanceOf[community] = balanceOf[community].sub(stakingFromWalletDate[msg.sender].tokens).sub(
      stakingSumm
    );
    balanceOf[msg.sender] = balanceOf[msg.sender].add(stakingFromWalletDate[msg.sender].tokens).add(
      stakingSumm
    );

    delete stakingFromWalletDate[msg.sender];
    return true;
  }
}
