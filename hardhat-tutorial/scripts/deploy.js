// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.

// Contract Address 0x3c039689E1C3C5E11e0822c8Dcb5A446D6307d19

const { ethers } = require("hardhat");
require("dotenv").config();
const { METADATA_URL, WHITELIST_CONTRACT_ADDRESS } = require("../constants");

async function main() {
  const whitelistContract = WHITELIST_CONTRACT_ADDRESS;
  const metadataUrl = METADATA_URL;

  // We get the contract to deploy
  const cryptoDevContract = await ethers.getContractFactory("CryptoDevs");
  const cryptoDev = await cryptoDevContract.deploy(
    metadataUrl,
    whitelistContract
  );
  await cryptoDev.deployed();

  console.log("CryptoDevs deployed to:", cryptoDev.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
