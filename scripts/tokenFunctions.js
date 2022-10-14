// analog remix ide: test our functions
// npx hardhat run scripts/tokenFunctions.js --network localhost

const hre = require("hardhat");
const tokenArtifact = require("../artifacts/contracts/Token.sol/Token.json");
const ethers = hre.ethers;

async function main() {
  const contractAddr = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const accountAddr = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";

  let signer = ethers.provider.getSigner(accountAddr); // this address signing transactions

  const contract = new ethers.Contract(contractAddr, tokenArtifact.abi, signer);
  // tokenArtifact for mapping between bytecode and function names

  let contractBalance = await contract.getBalance();
  console.log(ethers.utils.formatEther(contractBalance));


  let amountInEther = ethers.utils.parseEther("11.0"); // value

  let tx = {
    to: contractAddr,
    value: amountInEther,
  }; // transaction

  result = await signer.sendTransaction(tx); // method ethers.js
  console.log(result);

  contractBalance = await contract.getBalance();
  console.log(ethers.utils.formatEther(contractBalance));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
