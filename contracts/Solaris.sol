//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Solaris{
    address public owner;
    mapping(address => uint256) private paymentRecords;
    uint256 private amountCollected;

    constructor () {
        owner = msg.sender;
    }

    function acceptPayment() payable public{
        require(msg.value > 0.001 ether, "Please Send Amount More than 0.001 ether");
        amountCollected = amountCollected + msg.value;
        paymentRecords[msg.sender] = msg.value;
    }

    function withdraw(address _address) public{
        require(msg.sender == owner, "Only owner can withdraw");
        payable(_address).transfer(address(this).balance);
        amountDonated = 0;
    }

    function getTotalAmountReceived() public view returns(uint256){
        require(msg.sender == owner, "Only owner can withdraw");
        return amountCollected;
    }

    function getAmountDonated(address _address) public view returns(uint256){
        require(msg.sender == owner, "Only owner can withdraw");
        return paymentRecords[_address];
    }

}
