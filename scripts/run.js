const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["Trump", "Modi", "Putin"], // Names
    [
      "https://e7.pngegg.com/pngimages/245/1022/png-clipart-donald-trump-donald-trump.png", // Images
      "https://allpngfree.com/thumbnail/new-narendra-modi-png-images-download-thumbnail-1639411463.jpg",
      "https://purepng.com/public/uploads/large/purepng.com-vladimir-putinvladimir-putinvladimirputinvladimir-vladimirovich-putinpresident-of-russia-1701528083021cng1o.png",
    ],
    [300, 250, 100], // HP values
    [40, 150, 150], // Attack damage values
    "Elon Musk",
    "https://i.imgur.com/AksR0tt.png",
    10000,
    50
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

  let txn;
  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();
  txn = await gameContract.attackBoss();
  await txn.wait();

  console.log("DONE!!");
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
