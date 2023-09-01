// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {
  address public owner;
  string[] public proposals;
  mapping(address => bool) public hasVoted;
  mapping(uint256 => uint256) public votes;

  constructor(string[] memory _proposals) {
    owner = msg.sender;
    proposals = _proposals;
  }

  modifier onlyOwner() {
    require(msg.sender == owner, 'Only the owner can perform this action.');
    _;
  }

  modifier validProposal(uint256 proposalId) {
    require(proposalId < proposals.length, 'Invalid proposal ID.');
    _;
  }

  modifier hasNotVoted() {
    require(!hasVoted[msg.sender], 'You have already voted.');
    _;
  }

  function vote(uint256 proposalId) external validProposal(proposalId) hasNotVoted {
    hasVoted[msg.sender] = true;
    votes[proposalId]++;
  }

  function getProposalCount() external view returns (uint256) {
    return proposals.length;
  }

  function getProposal(
    uint256 proposalId
  ) external view validProposal(proposalId) returns (string memory) {
    return proposals[proposalId];
  }

  function getVoteCount(
    uint256 proposalId
  ) external view validProposal(proposalId) returns (uint256) {
    return votes[proposalId];
  }
}
