
const HDwalletProvider = require('@truffle/hdwallet-provider')
const Web3 = require('Web3')
// @ts-ignore
const {interface, bytecode} = require('./compile')

// The purpose of this module right here is to both connect to some target network and unlock an account
// for use on that network.
const provider = new HDwalletProvider('will curious bright embody feed century second access stove already apart cloud', 'https://rinkeby.infura.io/v3/ecafb40453e845f2b3dde29801408ff3')
const web3 = new Web3(provider)

const deploy = async () => {
const initialMessage = "Hi there!"
 const accounts = await web3.eth.getAccounts();
 console.log('Attempting to deploy from account', accounts[0])
//@ts-ignore
 await new web3.eth.Contract(JSON.parse(interface)).deploy({data: bytecode, arguments: [initialMessage]})
.send({from: accounts[0],gas: '1000000'})



}

deploy()

