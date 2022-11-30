const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["Trump", "Modi", "Putin"], // Names
    [
      "https://cloudflare-ipfs.com/ipfs/QmZ7ocJgVpEXdn2g4wAFuf41pZtYGT94gbnQ91Q1872E4o", // Images
      "https://cloudflare-ipfs.com/ipfs/QmczXxopV3KajmkrFrH4bG3NKBej6QjwysYniN2t4iG7SC",
      "https://cloudflare-ipfs.com/ipfs/QmZXCn6LyvqsatXP6EXwtrmbzXSDBeGTvFQ5H7rVpvcM7k",
    ],
    [300, 250, 100], // HP values
    [40, 150, 150], // Attack damage values
    "Elon Musk",
    "https://cloudflare-ipfs.com/ipfs/Qmens3TSDu2rpf7KSdoNGZdnLkN9CnS2mX7eyt6KUF4uNi",
    10000,
    50
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);
  // 0x1b85555D5Cfc3777672E8254e0350618CA163480
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
