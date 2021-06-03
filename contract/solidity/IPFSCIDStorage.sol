// SPDX-License-Identifier: MIT
pragma solidity ^0.7.6;

contract IPFSCIDStorage {
    string public IPFSCID;

    // 생성자. contract를 배포할 때 호출됨
    constructor(string memory initCID) {
        IPFSCID = initCID;
    }

    function setCID(string memory newCID) public {
        IPFSCID = newCID;
    }
}