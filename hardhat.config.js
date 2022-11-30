require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: `${process.env.YOUR_QUICKNODE_API_URL}`,
      accounts: [process.env.YOUR_PRIVATE_GOERLI_ACCOUNT_KEY],
    },
  },
};
