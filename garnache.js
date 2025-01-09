const { Web3 } = require('web3');

// Connect to Ganache
const ganacheUrl = 'http://127.0.0.1:7545';
const web3 = new Web3(ganacheUrl); // Directly pass the URL

// Test the connection
web3.eth.getAccounts()
  .then(accounts => {
    console.log('Ganache Accounts:', accounts);
  })
  .catch(error => {
    console.error('Error connecting to Ganache:', error);
  });

