// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EventWork {
  event WorkDone(address sender, uint ad, uint result);

  uint result;

  function run() public {
    result = 1 + 2;

    emit WorkDone(msg.sender, block.timestamp, result);
  }
}