require('@nomicfoundation/hardhat-toolbox');

module.exports = {
  defaultNetwork: "mumbai",
  networks: {
    hardhat: {
    },
    mumbai: {
      url: "",
      accounts: [$privatekey]
    }
},
  solidity: "0.8.17",
  paths: {
    artifacts: "./app/src/artifacts",
  }
};
