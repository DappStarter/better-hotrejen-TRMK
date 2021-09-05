require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give close brown slab carpet reflect saddle mixture grace farm fortune gas'; 
let testAccounts = [
"0x14719ad182b7a37205f7b02d56b9de03506d8f89f801012d72dd163066a4cb2f",
"0x628b8f4cefb05f530a7eee3c81b66e5b93012725b6111e19f6baa6393c94a954",
"0xd18196f867879663ca3e255d18958a7735ee0d4249c88cfc2e764126e49448ee",
"0x6748a1a47c022879020aaf933a6f80a03fb4b455a9d73ffe31a125bdb4a0039f",
"0xa7cb219d640459c9af5c414e6422055174cdd54b88d0172f28e1b39b71239c91",
"0x20b89592095dacea3bb67e03bc92bc9193763dc2593ee3578cbc210abf51b656",
"0x09d14b32e4b4882780f2e1901d37ccc69cec43e1338ff1ceda6819203be45272",
"0x3e577dfb5b883667325c8dbf113117f418a027e5459040e5903c31d0f4f6319f",
"0x7c7563e8d68a2372e2f629ffacaff1a5e6ed68d618d17cd7728c993acc25adad",
"0xa79ce5c229554e5de17c7d86398862c6b4afbccdd80d0650bfa2b6e96ca1255b"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

