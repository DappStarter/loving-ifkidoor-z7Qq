require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife olympic system index regret often honey good kiwi symptom gift'; 
let testAccounts = [
"0xcd74b4f9c237f9e9db6809d86ddeff2305de74e1a5e76e078e9200f285faf46c",
"0x0ec312e41af895b21b8e4ddb0a93b29c5794b922663a1983c9cbe81e84cb44ea",
"0xeae555930f4e873409b588a076c3269330f6167fbf08ebab2f0e1b347606d802",
"0x82f32e500e8d00c2f288000fc5c82863f456c382f1aa601fea313b533109c0a7",
"0xd3110adb5a7386d9b7df8b919b70c9e7ec7a8b2111c9ae9ee2b7d9d61bad285d",
"0xe659d21ecba04ea5185a6ee4070f443235724b0315cde105cff2eb432d932be0",
"0xd4ff7a035ea100fdb05c6f67f98db125ebf90f2f0318f789d445390772eef708",
"0x131942c230f17d5149856d777f7e97a50d4e2d0953d7ef925ea61e14bc515074",
"0xc8759e3164040b43d4a9a8d01492c547aaad66b1d8a35c5be6a3bfd3590a0b48",
"0x649b20744c447c5617c39d3ef2819abe1c3772ff4eecd59a8a349e2f3af534e1"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


