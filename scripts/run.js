const { ethers } = require('hardhat');

const main = async () => {
  const nftContractFactory = await ethers.getContractFactory('NFT');
  const nftContract = await nftContractFactory.deploy();

  await nftContract.deployed();
  console.log('NFT Contract Deployed at address: ', nftContract.address);

  let txn = await nftContract.makeAnEpicNFT();
  await txn.wait();

  txn = await nftContract.makeAnEpicNFT();
  await txn.wait();
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
