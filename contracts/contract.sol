// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0; // compiler version


contract TokenMarshaPlus {
    string public token_name = "MARSHA+"; // token name - human - readable
    string public token_symbol = "MRA";
    // uint256 public totalSupply = 8000000000; // 8 billion tokens
    uint256 public totalSupply = 100; // for developing and testing, delete before deploy in prod
    uint256 public decimals = 18; // will set the divisibility of your token
    address payable public owner; // Holds the owner of the token

/* This creates a mapping with all balances */
    mapping (address => uint256) public balanceOf;
    /* This creates a mapping of accounts with allowances */
    mapping (address => mapping (address => uint256)) public allowance;

    /* This event is always fired on a successfull call of the
       transfer, transferFrom, mint, and burn methods */
    event Transfer(address indexed from, address indexed to, uint256 value);
    /* This event is always fired on a successfull call of the approve method */
    event Approve(address indexed owner, address indexed spender, uint256 value);


    address constant public community = 0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2;
    address constant public marketing = 0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db;
    address constant public advisor = 0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB;
    address constant public foundation = 0x617F2E2fD72FD9D5503197092aC168c91465E7f2;
    address constant public developer = 0x17F6AD8Ef982297579C203069C1DbfFE4348c372;


    constructor(
        // address developer, 
        // address companion
        ) {
        balanceOf[community] = totalSupply/2;
        balanceOf[marketing] = totalSupply/6;
        balanceOf[advisor] = totalSupply/20;
        balanceOf[foundation] = totalSupply/5;
        balanceOf[developer] = totalSupply/10;

        // emit Transfer(msg.sender, companion, totalSupply / 2);
        // emit Transfer(msg.sender, developer, totalSupply / 10);
    }
}
