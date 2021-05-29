// SPDX-License-Identifier: MIT
pragma solidity ^0.7.6;

contract IPFSHashStorage {
    string public IPFSHash;

    // 생성자. contract를 배포할 때 호출됨
    constructor(string memory initHash) {
        IPFSHash = initHash;
    }

    function setHash(string memory newHash) public {
        IPFSHash = newHash;
    }
}