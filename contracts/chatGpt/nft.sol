// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/utils/Counters.sol';

contract MyToken is ERC721, ERC721URIStorage, Ownable {
  using Counters for Counters.Counter;

  Counters.Counter private _tokenIdCounter;

  constructor() ERC721('MyToken', 'MTK') {}

  function safeMint(address to, string memory uri) public onlyOwner {
    uint256 tokenId = _tokenIdCounter.current();
    _tokenIdCounter.increment();
    _safeMint(to, tokenId);
    _setTokenURI(tokenId, uri);
  }

  // The following functions are overrides required by Solidity.

  function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
    super._burn(tokenId);
  }

  function tokenURI(
    uint256 tokenId
  ) public view override(ERC721, ERC721URIStorage) returns (string memory) {
    return super.tokenURI(tokenId);
  }

  function supportsInterface(
    bytes4 interfaceId
  ) public view override(ERC721, ERC721URIStorage) returns (bool) {
    return super.supportsInterface(interfaceId);
  }

  mapping(uint256 => address) public tokenToArtist;

  function purchase(uint256 tokenId) external payable {
    require(_exists(tokenId), 'Token does not exist');
    address artist = tokenToArtist[tokenId];
    uint256 price = msg.value;
    uint256 artistCommission = (price * artistCommissionPercentage) / 100;
    uint256 sellerAmount = price - artistCommission;

    address payable seller = payable(ownerOf(tokenId));
    seller.transfer(sellerAmount);
    payable(artist).transfer(artistCommission);

    _transfer(seller, msg.sender, tokenId);
  }

  uint256 public artistCommissionPercentage = 50;

  function setArtistCommission(uint256 percentage) external onlyOwner {
    require(percentage <= 100, 'Commission percentage cannot exceed 100%');
    artistCommissionPercentage = percentage;
  }
}
