pragma solidity ^0.8.0; // compiler version
import { SafeMath } from './SafeMath.sol';

import 'hardhat/console.sol';

contract MarshaPlus {
  struct Voter {
    bool voted; // if true, that person already voted
  }

  mapping(address => Voter) public voters;

  struct Proposal {
    // If you can limit the length to a certain number of bytes,
    // always use one of bytes1 to bytes32 because they are much cheaper
    bytes32 name; // short name (up to 32 bytes)
    uint voteCount; // number of accumulated votes
  }

  Proposal[] public proposals;

  constructor(bytes32[] memory proposalNames) {
    for (uint i = 0; i < proposalNames.length; i++) {
      // 'Proposal({...})' creates a temporary
      // Proposal object and 'proposals.push(...)'
      // appends it to the end of 'proposals'.
      proposals.push(Proposal({ name: proposalNames[i], voteCount: 0 }));
    }
  }

  function vote(uint proposal) public {
    Voter storage sender = voters[msg.sender];
    require(!sender.voted, 'Already voted.');
    sender.voted = true;
    proposals[proposal].voteCount += 1;
  }
}
