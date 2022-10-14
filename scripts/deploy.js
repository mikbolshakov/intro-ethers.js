// compiling and placing on the blockchain
// npx hardhat run scripts/deploy.js --network localhost

const hre = require("hardhat");
const ethers = hre.ethers;

async function main() {
  const accountAddr = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
  let signer = ethers.provider.getSigner(accountAddr);

  const Token = await ethers.getContractFactory("Token", signer); // find a contract
  const token = await Token.deploy(); // deploying a contract on the blockchain
  await token.deployed(); // waiting for deployment

  console.log("Token address (contract):", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
