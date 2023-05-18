import { ethers } from 'ethers';

import BigNumber from 'bignumber.js';
import { useWeb3React } from "@web3-react/core";
import {
  // SUBTRACT_GAS_LIMIT,
  contractAddresses,
} from './lib/constants.js';
import { bnToDec } from './utils';
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
});



export const getErc20CappedContract = (bunzz) => {
  return bunzz && bunzz.contracts && bunzz.contracts.erc20Capped;
}


export const setErc20ContractAddress = (bunzz, address) => {
  bunzz.contracts.erc20.options.address = address;
}


export const mint = async (erc20Capped, to, amount, account) => {
  return erc20Capped.methods.mint(to, new BigNumber(amount).times(new BigNumber(10).pow(18)).toString()).send({ from: account})
  .on('transactionHash', (tx) => {
    console.log(tx)
    return tx.transactionHash
  }); 
}

export const pause = async (erc20Capped, account) => {
  return erc20Capped.methods.pause().send({ from: account})
  .on('transactionHash', (tx) => {
    console.log(tx)
    return tx.transactionHash
  }); 
}

export const unpause = async (erc20Capped, account) => {
  return erc20Capped.methods.unpause().send({ from: account})
  .on('transactionHash', (tx) => {
    console.log(tx)
    return tx.transactionHash
  }); 
}



