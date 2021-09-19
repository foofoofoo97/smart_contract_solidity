// deploy code will go here
const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  "fog vault lab bomb discover miss grit unusual exchange fresh engage laptopfog vault lab bomb discover miss grit unusual exchange fresh engage laptop",
  "https://rinkeby.infura.io/v3/49365133728c45fd9f0d64f45c920125"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log("Attempting to deploy from acc ", accounts[0]);

  //   const result = await new web3.eth.Contract(JSON.parse(interface))
  //     .deploy({ data: bytecode, arguments: ["Hi There!"] })
  //     .send({
  //       gas: "1000000",
  //       gasPrice: "5000000000",
  //       from: accounts[0],
  //     });

  //   console.log("Contract deployed to", result.options.address);
};

deploy();
