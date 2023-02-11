async function main() {
    const MyNFT = await ethers.getContractFactory("MyNFT");
    // Start deployment, returning a promise that resolves to a contract object
    const myNFT = await MyNFT.deploy();
    await myNFT.deployed();
    console.log("Contract deployed to address:", myNFT.address); // 0x45F757e011608dA67354c2839158cf3a44AF28ef
  }
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });