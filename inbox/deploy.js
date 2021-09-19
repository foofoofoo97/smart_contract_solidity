// deploy code will go here
const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  "fog vault lab bomb discover miss grit unusual exchange fresh engage laptopfog vault lab bomb discover miss grit unusual exchange fresh engage laptop",
  "https://rinkeby.infura.io/v3/49365133728c45fd9f0d64f45c920125"
);

const web3 = new Web3(provider);
