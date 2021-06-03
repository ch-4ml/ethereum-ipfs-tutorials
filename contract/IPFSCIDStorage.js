const address = "0x9Ac9A301949B3AE1c568949D54E4502dFA34A66e";
const abi = [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "newCID",
          "type": "string"
        }
      ],
      "name": "setCID",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "initCID",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "IPFSCID",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
];

module.exports = { address, abi };