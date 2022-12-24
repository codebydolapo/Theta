//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Solaris {
    address public owner;
    mapping(address => uint256) private paymentRecords;
    uint256 private amountCollected;

    event paymentReceived(address from, address to, uint256 amount);

    event withdrawalMade(address from, address to, uint256 amount);

    constructor(address _owner) {
        owner = _owner;
    }

    function acceptPayment() public payable {
        require(
            msg.value > 0.001 ether,
            "Please Send Amount More than 0.001 ether"
        );
        amountCollected = amountCollected + msg.value;
        paymentRecords[msg.sender] = msg.value;
        emit paymentReceived(msg.sender, address(this), msg.value);
    }

    function withdraw(address _address) public {
        require(msg.sender == owner, "Only owner can withdraw");
        payable(_address).transfer(address(this).balance);
        emit withdrawalMade(address(this), _address, amountCollected);
        amountCollected = 0;
    }

    function getTotalAmountReceived() public view returns (uint256) {
        require(msg.sender == owner, "Only owner can withdraw");
        return amountCollected;
    }

    function getAmountReceived(address _address) public view returns (uint256) {
        return paymentRecords[_address];
    }
}
