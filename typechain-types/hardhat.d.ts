/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "BEP20Token",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BEP20Token__factory>;
    getContractFactory(
      name: "Context",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Context__factory>;
    getContractFactory(
      name: "IBEP20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBEP20__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "Lock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Lock__factory>;
    getContractFactory(
      name: "MarshaPlus",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MarshaPlus__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "StakingRewards",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.StakingRewards__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "ISwapRouter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISwapRouter__factory>;
    getContractFactory(
      name: "IWETH",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IWETH__factory>;
    getContractFactory(
      name: "UniswapV3SwapExamples",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UniswapV3SwapExamples__factory>;

    getContractAt(
      name: "BEP20Token",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BEP20Token>;
    getContractAt(
      name: "Context",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Context>;
    getContractAt(
      name: "IBEP20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBEP20>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "Lock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Lock>;
    getContractAt(
      name: "MarshaPlus",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MarshaPlus>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "StakingRewards",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.StakingRewards>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "ISwapRouter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISwapRouter>;
    getContractAt(
      name: "IWETH",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IWETH>;
    getContractAt(
      name: "UniswapV3SwapExamples",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UniswapV3SwapExamples>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
