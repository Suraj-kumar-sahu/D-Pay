require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.9",
  networks:{
      goerli:{
        url: "https://eth-goerli.g.alchemy.com/v2/DQuVWY4VCRQLjCRCJms_-UXgplNUAtTI",
        accounts: ['ce4111d66627d7f0e832585a5e689a69b35f3f4bae45ea5ccc708dedfc6c502f']
      }
  }
};
