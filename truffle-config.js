var HDWalletProvider = require("truffle-hdwallet-provider");
const MNEMONIC = 'REDACTED';

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(MNEMONIC, "https://ropsten.infura.io/KEY")
      },
      network_id: 3,
      gas: 4000000
    }
  }
};
