// interaction with demo blockchain hh
// node scripts/txtest.js

const { Signer } = require("ethers");
const hre = require("hardhat"); // connet hh (auto)
const ethers = hre.ethers; // connet ethers.js

async function main() {
  const url = "http://127.0.0.1:8545/";
  const provider = new ethers.providers.JsonRpcProvider(url);
  // relative to the provider, we start transactions */

  /* const provider = ethers.provider; - reset test blockchain 
    after npx hardhat run scripts/deploy.js --network localhost */

  let amountInEther = ethers.utils.parseEther("10.0"); // value

  let sender = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
  let receiver = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  let signer = provider.getSigner(sender); // this address signing transactions

  let tx = { 
    to: receiver,
    value: amountInEther,
  }; // transaction

  result = await signer.sendTransaction(tx); // method ethers.js
  console.log(result);

  const balance = await signer.getBalance();
  console.log(ethers.utils.formatEther(balance));

  const balanceReceiver = await provider.getBalance(receiver);
  console.log(ethers.utils.formatEther(balanceReceiver));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
