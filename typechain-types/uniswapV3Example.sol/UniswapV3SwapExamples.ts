/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface UniswapV3SwapExamplesInterface extends utils.Interface {
  functions: {
    "swapExactInputMultiHop(bytes,address,uint256)": FunctionFragment;
    "swapExactInputSingleHop(address,address,uint24,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "swapExactInputMultiHop" | "swapExactInputSingleHop"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "swapExactInputMultiHop",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExactInputSingleHop",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "swapExactInputMultiHop",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapExactInputSingleHop",
    data: BytesLike
  ): Result;

  events: {};
}

export interface UniswapV3SwapExamples extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: UniswapV3SwapExamplesInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    swapExactInputMultiHop(
      path: PromiseOrValue<BytesLike>,
      tokenIn: PromiseOrValue<string>,
      amountIn: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    swapExactInputSingleHop(
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      poolFee: PromiseOrValue<BigNumberish>,
      amountIn: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  swapExactInputMultiHop(
    path: PromiseOrValue<BytesLike>,
    tokenIn: PromiseOrValue<string>,
    amountIn: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  swapExactInputSingleHop(
    tokenIn: PromiseOrValue<string>,
    tokenOut: PromiseOrValue<string>,
    poolFee: PromiseOrValue<BigNumberish>,
    amountIn: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    swapExactInputMultiHop(
      path: PromiseOrValue<BytesLike>,
      tokenIn: PromiseOrValue<string>,
      amountIn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swapExactInputSingleHop(
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      poolFee: PromiseOrValue<BigNumberish>,
      amountIn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    swapExactInputMultiHop(
      path: PromiseOrValue<BytesLike>,
      tokenIn: PromiseOrValue<string>,
      amountIn: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    swapExactInputSingleHop(
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      poolFee: PromiseOrValue<BigNumberish>,
      amountIn: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    swapExactInputMultiHop(
      path: PromiseOrValue<BytesLike>,
      tokenIn: PromiseOrValue<string>,
      amountIn: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    swapExactInputSingleHop(
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      poolFee: PromiseOrValue<BigNumberish>,
      amountIn: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
