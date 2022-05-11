// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.4.17;

contract Inbox {
    string public message;
    // A storage variable is one that will 
    // automatically be stored with the contract on the blockchain
    // so if we change the value of the message
    // the value will be stored for eternity on the blockchain 

    function Inbox(string initialMessage) public {
        message = initialMessage;
    }

    function setMessage(string newMessage) public {
        message = newMessage;
    }
    
    function getMessage() public view returns (string) { 
     return message;
    }
}