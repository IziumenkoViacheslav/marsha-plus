// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0; // compiler version

contract TokenMarshaPlus {
    // uint256 public totalSupply = 8000000000; // 8 billion tokens
    string public token_name = "MARSHA+"; // token name - human - readable
    string public token_symbol = "MRA";
    // uint256 public totalSupply = 80000000000000; // for developing and testing, delete before deploy in prod
    uint256 public totalSupply = 100; // for developing and testing, delete before deploy in prod
    uint256 public decimals = 18; // will set the divisibility of your token
    address payable public owner; // Holds the owner of the token

    uint256 deployDate;
    uint256 lastTimeBurned;

    uint32 private leaseTime = 365 days;

    mapping(address => uint256) public balanceOf;

    event Transfer(address indexed from, address indexed to, uint256 value);

    address public constant community =
        0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2;
    address public constant foundation =
        0x617F2E2fD72FD9D5503197092aC168c91465E7f2;
    address public constant marketing =
        0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db;
    address public constant advisor =
        0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB;
    address public constant developer =
        0x17F6AD8Ef982297579C203069C1DbfFE4348c372;
    address public constant technical =
        0xdD870fA1b7C4700F2BD7f44238821C26f7392148;

    constructor() // address developer,
    // address companion
    {
        deployDate = block.timestamp;
        lastTimeBurned = block.timestamp;
        balanceOf[community] = (totalSupply * 35) / 100;
        balanceOf[foundation] = (totalSupply * 25) / 100;
        balanceOf[marketing] = (totalSupply * 8) / 100;
        balanceOf[advisor] = totalSupply / 20;
        balanceOf[developer] = (totalSupply * 10) / 100;
        balanceOf[technical] = (totalSupply * 5) / 100;

        // emit Transfer(msg.sender, companion, totalSupply / 2);
        // emit Transfer(msg.sender, developer, totalSupply / 10);
    }

    modifier oneYearExpire() {
        if (block.timestamp >= leaseTime + deployDate) {
            _;
        }
    }

    function transfer(address _to, uint256 _value)
        public
        returns (bool success)
    {
        uint256 senderBalance = balanceOf[msg.sender];
        uint256 receiverBalance = balanceOf[_to];

        require(_to != address(0), "Receiver address invalid");
        require(_value >= 0, "Value must be greater or equal to 0");
        require(senderBalance > _value, "Not enough balance");

        balanceOf[msg.sender] = senderBalance - _value;
        balanceOf[_to] = receiverBalance + _value;

        emit Transfer(msg.sender, _to, _value);
        return true;
    }

    function burn() private oneYearExpire returns (bool success) {
        require(
            balanceOf[community] > (totalSupply * 3) / 100,
            "Burn amount exceeds balance"
        );
        if (block.timestamp > lastTimeBurned + 365 days) {
            emit Transfer(community, address(0), (totalSupply * 3) / 100);
            lastTimeBurned = block.timestamp;
        }

        balanceOf[community] = balanceOf[community] - (totalSupply * 3) / 100;

        return true;
    }
}
