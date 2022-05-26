import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'SeaHorseArmy',
  tokenName: 'SeaHorseArmy',
  tokenSymbol: 'SHA',
  hiddenMetadataUri: 'ipfs://QmTatNYDP32LJvh9Jyqv5M8qP12uB3jRwkx7Ch8grETvMb/hidden.json',
  maxSupply: 7777,
  whitelistSale: {
    price: 0.07,
    maxMintAmountPerTx: 7,
  },
  preSale: {
    price: 0.11,
    maxMintAmountPerTx: 7,
  },
  publicSale: {
    price: 0.14,
    maxMintAmountPerTx: 7,
  },
  contractAddress: 'null',
  marketplaceIdentifier: 'seahorsearmy',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
