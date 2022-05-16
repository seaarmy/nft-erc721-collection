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
  tokenName: 'SeaHorse',
  tokenSymbol: 'SEAHORSE',
  hiddenMetadataUri: 'ipfs://QmZ4htRyavjM269kqsHb5Usu3BbUnR8B4xYtwXiRq4vF2w/hidden.json',
  maxSupply: 91,
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
  contractAddress: '0x592f91CbAa15941ab6213da6e3d710C37a446325',
  marketplaceIdentifier: 'seahorsearmy',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
