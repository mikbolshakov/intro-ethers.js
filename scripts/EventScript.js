const { ethers } = require("hardhat");

const [owner, otherAcc] = await ethers.getSigners()
const EventWork = await ethers.getContractFactory("EventWork", owner)
const eventWork = await EventWork.deploy()
await eventWork.deployed()