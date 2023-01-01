//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

error Theta__transferFailed();
error Theta__NeedsMoreThanZero();

contract Theta{

    IERC20 public s_stakingToken;

    IERC20 public s_rewardToken;

    //mapping of how much is deposited by each address
    mapping(address => uint256) public s_balances;

    uint256 public constant REWARD_RATE = 100;

    uint256 public s_totalSupply;

    uint256 public s_rewardPerTokenStored;

    uint256 public s_lastUpdateTime;

    //how much each address has been paid
    mapping(address => uint256) public s_userRewardPerTokenPaid;

    //mapping of how much each address has earned
    mapping(address => uint256) public s_rewards;

    event tokensStaked(
        address from,
        uint256 amount
    );

    modifier updateReward(address account){
        s_rewardPerTokenStored = rewardPerToken();
        s_lastUpdateTime = block.timestamp;
        s_rewards[account] = earned(account);
        s_userRewardPerTokenPaid[account] = s_rewardPerTokenStored;
        _;
    }

    modifier moreThanZero(uint256 amount){
        if(amount == 0){
            revert Theta__NeedsMoreThanZero();
        }
            _;
    }

    constructor(address stakingToken, address rewardToken){
        s_stakingToken = IERC20(stakingToken);
        s_rewardToken = IERC20(rewardToken);
    }

    function rewardPerToken() public view returns(uint256){
        if(s_totalSupply == 0){
            return s_rewardPerTokenStored;
        }
        return s_rewardPerTokenStored + (((block.timestamp - s_lastUpdateTime) * REWARD_RATE * 1e18)/ s_totalSupply);
    }

    //Returns the earned amount of each staker
    function earned(address account) public view returns(uint256){
        uint256 currentBalance = s_balances[account];
        uint256 amountPaid = s_userRewardPerTokenPaid[account];
        uint256 currentRewardPerToken = rewardPerToken();
        uint256 pastRewards = s_rewards[account];

        uint256 _earned = (currentBalance * (currentRewardPerToken - amountPaid)/1e18) + pastRewards;
        return _earned;
    }

    function stake(uint256 _amount) external updateReward(msg.sender) moreThanZero(_amount) {
        s_balances[msg.sender] = s_balances[msg.sender] + _amount;
        s_totalSupply = s_totalSupply + _amount;
        emit tokensStaked(msg.sender, _amount);
        bool success = s_stakingToken.transferFrom(msg.sender, address(this), _amount);
        if(!success){
            revert Theta__transferFailed();
        }
    }

    function withdraw(uint256 amount) updateReward(msg.sender) external {
        s_balances[msg.sender] = s_balances[msg.sender] - amount;
        s_totalSupply = s_totalSupply - amount;
        bool success = s_stakingToken.transfer(msg.sender, amount);
        if(!success){
            revert Theta__transferFailed();
        }
    }

    function claimReward() external updateReward(msg.sender){
        uint256 reward = s_rewards[msg.sender];
        bool success = s_stakingToken.transfer(msg.sender, reward);
        if(!success){
            revert Theta__transferFailed();
        }
    }

}