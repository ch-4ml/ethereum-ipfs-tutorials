const address = '0x66675930C06Ef3c71a36276257b7B18560af4EA1';
const abi = [
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "newHash",
        "type": "string"
      }
    ],
    "name": "setHash",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "initHash",
        "type": "string"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "IPFSHash",
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

module.exports = { address, abi }