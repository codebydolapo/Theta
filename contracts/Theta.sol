//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

error Theta__transferFailed();

contract Theta{

    IERC20 public s_stakingToken;

    mapping(address => uint256) public s_balances;

    uint256 public s_totalSupply;

    event tokensStaked(
        address from,
        uint256 amount
    );

    constructor(IERC20 _stakingToken){
        s_stakingToken = IERC20(_stakingToken);
    }

    function stake(uint256 amount) external{
        s_totalSupply += amount;
        s_balances[msg.sender] += amount;
        emit tokensStaked(msg.sender, amount);
        bool success = s_stakingToken.transferFrom(msg.sender, address(this), amount);
        if(!success){
            revert Theta__transferFailed();
        }
    }

    function withdraw(uint256 amount) external {
        s_balances[msg.sender] = s_balances[msg.sender] - amount;
        s_totalSupply = s_totalSupply - amount;
        bool success = s_stakingToken.transfer(msg.sender, amount);
        if(!success){
            revert Theta__transferFailed();
        }
    }

}