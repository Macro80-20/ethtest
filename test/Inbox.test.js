// contract test code will go here
const assert = require('assert')

const ganache = require('ganache-cli')
const Web3 = require('Web3')
const {interface, bytecode} = require('../compile')
// creates an instance of Web three and tells that instance to
// attempt to connect to this local test network that we are hosting on our machine solely for the purpose
// when we want to connect to other networks like rinkbey we would replace it with a different providers 
// ganache provide already has some account installed inside the provider 
const web3 = new Web3(ganache.provider())

let accounts
let inbox
const initialMessage = "Hi there!"

beforeEach( async() => {
    // Ganache already unlocks some accounts pre generated for us to help deploy without worrying about private keys or anything like that 
    accounts = await web3.eth.getAccounts()
    inbox = await new web3.eth.Contract(JSON.parse(interface)).deploy({data: bytecode, arguments: [initialMessage]})
    .send({from: accounts[0],gas: '1000000'})
})

describe('Inbox', () => {
    it('deploys a contract', () => {
        console.log("Inbox",inbox)
        // console.log(inbox)
       assert.ok(inbox.options.address)
    })
    it("Has initial value" , async() => {
        const message = await inbox.methods.message().call()
        console.log(message)
        assert.equal(message,initialMessage)
    }) 
    it("Will update message" , async() => {
        const newMessage ="updatedMessage "
        await inbox.methods.setMessage(newMessage).send({from: accounts[0]})
        const updatedMessage = await inbox.methods.message().call()
        assert.equal(updatedMessage,newMessage)
    }) 
})

