//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ThetaCoin is ERC20{

    constructor() ERC20("ThetaCoin", "XTC"){
        _mint(msg.sender, 1000000 * 10e18);
    }

}