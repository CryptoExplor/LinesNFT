// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/Base64.sol";

contract Lines is ERC721, ERC721URIStorage, Ownable, ReentrancyGuard {
    using Strings for uint256;

    uint256 public constant MAX_SUPPLY = 10000;
    uint256 public constant MINT_PRICE = 0.001 ether;
    uint256 private _tokenIdCounter = 1;

    event Minted(uint256 tokenId, address owner);

    constructor() ERC721("Lines", "LINES") Ownable(msg.sender) {}

    function mint() external payable nonReentrant {
        require(_tokenIdCounter <= MAX_SUPPLY, "Max supply reached");
        require(msg.value >= MINT_PRICE, "Insufficient payment");

        uint256 tokenId = _tokenIdCounter;
        _tokenIdCounter++;

        _safeMint(msg.sender, tokenId);
        
        string memory tokenURI = generateTokenURI(tokenId);
        _setTokenURI(tokenId, tokenURI);

        emit Minted(tokenId, msg.sender);
    }

    function generateTokenURI(uint256 tokenId) private view returns (string memory) {
        string memory svg = generateSVG(tokenId);
        
        string memory json = Base64.encode(
            bytes(
                string(
                    abi.encodePacked(
                        '{"name": "Lines #',
                        tokenId.toString(),
                        '", "description": "Generative line art NFT", "image": "data:image/svg+xml;base64,',
                        Base64.encode(bytes(svg)),
                        '"}'
                    )
                )
            )
        );

        return string(abi.encodePacked("data:application/json;base64,", json));
    }

    function generateSVG(uint256 tokenId) private view returns (string memory) {
        uint256 seed = uint256(keccak256(abi.encodePacked(tokenId, block.prevrandao, block.timestamp)));
        
        string memory lines = "";
        uint256 numLines = (seed % 20) + 10; // 10-30 lines
        
        for (uint256 i = 0; i < numLines; i++) {
            seed = uint256(keccak256(abi.encodePacked(seed, i)));
            
            uint256 x1 = seed % 400;
            uint256 y1 = (seed >> 8) % 400;
            uint256 x2 = (seed >> 16) % 400;
            uint256 y2 = (seed >> 24) % 400;
            
            uint256 hue = (seed >> 32) % 360;
            
            lines = string(
                abi.encodePacked(
                    lines,
                    '<line x1="',
                    x1.toString(),
                    '" y1="',
                    y1.toString(),
                    '" x2="',
                    x2.toString(),
                    '" y2="',
                    y2.toString(),
                    '" stroke="hsl(',
                    hue.toString(),
                    ', 70%, 60%)" stroke-width="2" opacity="0.8"/>'
                )
            );
        }

        return string(
            abi.encodePacked(
                '<svg width="400" height="400" xmlns="http://www.w3.org/2000/svg" style="background: black;">',
                lines,
                '</svg>'
            )
        );
    }

    function totalSupply() external view returns (uint256) {
        return _tokenIdCounter - 1;
    }

    function withdraw() external onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "No funds to withdraw");
        
        (bool success, ) = payable(owner()).call{value: balance}("");
        require(success, "Withdrawal failed");
    }

    function tokenURI(uint256 tokenId) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId) public view override(ERC721, ERC721URIStorage) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}
