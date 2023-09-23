/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  Main,
  MainInterface,
} from "../../../../contracts/chatGpt/main.sol/Main";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "ANNUAL_BURN_RATE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "INITIAL_SUPPLY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "charity",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "community",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "development",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "expansion",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "foundation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "investors",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastBurnTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "legal",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "marketing",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "timeOfContractCreation",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600781526020017f4d41525348412b000000000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f4d5341000000000000000000000000000000000000000000000000000000000081525081600390816200008f919062000b40565b508060049081620000a1919062000b40565b505050620000c4620000b8620003a860201b60201c565b620003b060201b60201c565b4260068190555042600781905550620000f0306b19d971e4fe8401e7400000006200047660201b60201c565b6200013f3073f1a3a5fd1daeab3df9da1b59361898f1e6c934aa606460236b19d971e4fe8401e74000000062000127919062000c56565b62000133919062000cd0565b620005e360201b60201c565b60026200016673f1a3a5fd1daeab3df9da1b59361898f1e6c934aa6200087460201b60201c565b62000172919062000cd0565b600881905550620001c73073045a08a1c3d49cb80f6e37bd9b82eda7776e70bb606460056b19d971e4fe8401e740000000620001af919062000c56565b620001bb919062000cd0565b620005e360201b60201c565b620002163073bbb9dbc0e769e5934da69f9e5eea0526155fb5da606460056b19d971e4fe8401e740000000620001fe919062000c56565b6200020a919062000cd0565b620005e360201b60201c565b620002653073fb22b7409ea071243fd1f98d05a11807de0d002c606460056b19d971e4fe8401e7400000006200024d919062000c56565b62000259919062000cd0565b620005e360201b60201c565b620002b4307394ada1fa5f86124607bf2d860ea055b33588d65b606460056b19d971e4fe8401e7400000006200029c919062000c56565b620002a8919062000cd0565b620005e360201b60201c565b62000303307370d5155c8aeb6a0d6ea1f7df13a73b44ce577aeb606460056b19d971e4fe8401e740000000620002eb919062000c56565b620002f7919062000cd0565b620005e360201b60201c565b6200035330732afd6c9b1ee109614773e5f4ace498564256b7036103e860196b19d971e4fe8401e7400000006200033b919062000c56565b62000347919062000cd0565b620005e360201b60201c565b620003a230732901a3cab9a64e40be94a2f2118c8adb32710646606460016b19d971e4fe8401e7400000006200038a919062000c56565b62000396919062000cd0565b620005e360201b60201c565b62000fbc565b600033905090565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603620004e8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620004df9062000d69565b60405180910390fd5b620004fc60008383620008bc60201b60201c565b806002600082825462000510919062000d8b565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051620005c3919062000dd7565b60405180910390a3620005df60008383620008c160201b60201c565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160362000655576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200064c9062000e6a565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603620006c7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620006be9062000f02565b60405180910390fd5b620006da838383620008bc60201b60201c565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101562000763576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200075a9062000f9a565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405162000853919062000dd7565b60405180910390a36200086e848484620008c160201b60201c565b50505050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b505050565b505050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200094857607f821691505b6020821081036200095e576200095d62000900565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620009c87fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000989565b620009d4868362000989565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b600062000a2162000a1b62000a1584620009ec565b620009f6565b620009ec565b9050919050565b6000819050919050565b62000a3d8362000a00565b62000a5562000a4c8262000a28565b84845462000996565b825550505050565b600090565b62000a6c62000a5d565b62000a7981848462000a32565b505050565b5b8181101562000aa15762000a9560008262000a62565b60018101905062000a7f565b5050565b601f82111562000af05762000aba8162000964565b62000ac58462000979565b8101602085101562000ad5578190505b62000aed62000ae48562000979565b83018262000a7e565b50505b505050565b600082821c905092915050565b600062000b156000198460080262000af5565b1980831691505092915050565b600062000b30838362000b02565b9150826002028217905092915050565b62000b4b82620008c6565b67ffffffffffffffff81111562000b675762000b66620008d1565b5b62000b7382546200092f565b62000b8082828562000aa5565b600060209050601f83116001811462000bb8576000841562000ba3578287015190505b62000baf858262000b22565b86555062000c1f565b601f19841662000bc88662000964565b60005b8281101562000bf25784890151825560018201915060208501945060208101905062000bcb565b8683101562000c12578489015162000c0e601f89168262000b02565b8355505b6001600288020188555050505b505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600062000c6382620009ec565b915062000c7083620009ec565b925082820262000c8081620009ec565b9150828204841483151762000c9a5762000c9962000c27565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600062000cdd82620009ec565b915062000cea83620009ec565b92508262000cfd5762000cfc62000ca1565b5b828204905092915050565b600082825260208201905092915050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b600062000d51601f8362000d08565b915062000d5e8262000d19565b602082019050919050565b6000602082019050818103600083015262000d848162000d42565b9050919050565b600062000d9882620009ec565b915062000da583620009ec565b925082820190508082111562000dc05762000dbf62000c27565b5b92915050565b62000dd181620009ec565b82525050565b600060208201905062000dee600083018462000dc6565b92915050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b600062000e5260258362000d08565b915062000e5f8262000df4565b604082019050919050565b6000602082019050818103600083015262000e858162000e43565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b600062000eea60238362000d08565b915062000ef78262000e8c565b604082019050919050565b6000602082019050818103600083015262000f1d8162000edb565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b600062000f8260268362000d08565b915062000f8f8262000f24565b604082019050919050565b6000602082019050818103600083015262000fb58162000f73565b9050919050565b611ef18062000fcc6000396000f3fe608060405234801561001057600080fd5b506004361061018e5760003560e01c80637b929c27116100de578063a457c2d711610097578063dc1fb5a511610071578063dc1fb5a51461047f578063dd62ed3e1461049d578063e377ac31146104cd578063f2fde38b146104eb5761018e565b8063a457c2d714610401578063a9059cbb14610431578063ae15a8f6146104615761018e565b80637b929c271461034d5780637fce02031461036b5780638ac27f5f146103895780638da5cb5b146103a7578063934aa023146103c557806395d89b41146103e35761018e565b8063313ce5671161014b57806341fbb0501161012557806341fbb050146102d757806367fea82e146102f557806370a0823114610313578063715018a6146103435761018e565b8063313ce5671461026b57806339509351146102895780633d3d937d146102b95761018e565b806306fdde0314610193578063095ea7b3146101b157806318160ddd146101e157806323b872dd146101ff5780632d3e474a1461022f5780632ff2e9dc1461024d575b600080fd5b61019b610507565b6040516101a891906114e0565b60405180910390f35b6101cb60048036038101906101c6919061159b565b610599565b6040516101d891906115f6565b60405180910390f35b6101e96105bc565b6040516101f69190611620565b60405180910390f35b6102196004803603810190610214919061163b565b6105c6565b60405161022691906115f6565b60405180910390f35b6102376105ef565b604051610244919061169d565b60405180910390f35b610255610607565b6040516102629190611620565b60405180910390f35b610273610617565b60405161028091906116d4565b60405180910390f35b6102a3600480360381019061029e919061159b565b610620565b6040516102b091906115f6565b60405180910390f35b6102c1610657565b6040516102ce9190611620565b60405180910390f35b6102df61065d565b6040516102ec919061169d565b60405180910390f35b6102fd610675565b60405161030a9190611620565b60405180910390f35b61032d600480360381019061032891906116ef565b61067b565b60405161033a9190611620565b60405180910390f35b61034b6106c3565b005b6103556106d7565b604051610362919061169d565b60405180910390f35b6103736106ef565b604051610380919061169d565b60405180910390f35b610391610707565b60405161039e919061169d565b60405180910390f35b6103af61071f565b6040516103bc919061169d565b60405180910390f35b6103cd610749565b6040516103da919061169d565b60405180910390f35b6103eb610761565b6040516103f891906114e0565b60405180910390f35b61041b6004803603810190610416919061159b565b6107f3565b60405161042891906115f6565b60405180910390f35b61044b6004803603810190610446919061159b565b61086a565b60405161045891906115f6565b60405180910390f35b610469610891565b6040516104769190611620565b60405180910390f35b610487610896565b604051610494919061169d565b60405180910390f35b6104b760048036038101906104b2919061171c565b6108ae565b6040516104c49190611620565b60405180910390f35b6104d5610935565b6040516104e2919061169d565b60405180910390f35b610505600480360381019061050091906116ef565b61094d565b005b6060600380546105169061178b565b80601f01602080910402602001604051908101604052809291908181526020018280546105429061178b565b801561058f5780601f106105645761010080835404028352916020019161058f565b820191906000526020600020905b81548152906001019060200180831161057257829003601f168201915b5050505050905090565b6000806105a46109d0565b90506105b18185856109d8565b600191505092915050565b6000600254905090565b60006105d0610ba1565b6105d8610c33565b6105e3848484610de1565b50600190509392505050565b7394ada1fa5f86124607bf2d860ea055b33588d65b81565b6b19d971e4fe8401e74000000081565b60006012905090565b60008061062b6109d0565b905061064c81858561063d85896108ae565b61064791906117eb565b6109d8565b600191505092915050565b60065481565b73bbb9dbc0e769e5934da69f9e5eea0526155fb5da81565b60075481565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6106cb610e10565b6106d56000610e8e565b565b73fb22b7409ea071243fd1f98d05a11807de0d002c81565b732901a3cab9a64e40be94a2f2118c8adb3271064681565b7370d5155c8aeb6a0d6ea1f7df13a73b44ce577aeb81565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b73045a08a1c3d49cb80f6e37bd9b82eda7776e70bb81565b6060600480546107709061178b565b80601f016020809104026020016040519081016040528092919081815260200182805461079c9061178b565b80156107e95780601f106107be576101008083540402835291602001916107e9565b820191906000526020600020905b8154815290600101906020018083116107cc57829003601f168201915b5050505050905090565b6000806107fe6109d0565b9050600061080c82866108ae565b905083811015610851576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161084890611891565b60405180910390fd5b61085e82868684036109d8565b60019250505092915050565b6000610874610ba1565b61087c610c33565b6108868383610f54565b506001905092915050565b600381565b73f1a3a5fd1daeab3df9da1b59361898f1e6c934aa81565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b732afd6c9b1ee109614773e5f4ace498564256b70381565b610955610e10565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036109c4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109bb90611923565b60405180910390fd5b6109cd81610e8e565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610a47576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a3e906119b5565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610ab6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aad90611a47565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610b949190611620565b60405180910390a3505050565b6301e13380600654610bb391906117eb565b4210610c31576000610bc36105bc565b905060006064600383610bd69190611a67565b610be09190611ad8565b9050600854610c0273f1a3a5fd1daeab3df9da1b59361898f1e6c934aa61067b565b1115610c2757610c2673f1a3a5fd1daeab3df9da1b59361898f1e6c934aa82610f77565b5b4260068190555050505b565b6305a39a80600754610c4591906117eb565b4210610ddf57610c8e3073045a08a1c3d49cb80f6e37bd9b82eda7776e70bb606460146b19d971e4fe8401e740000000610c7f9190611a67565b610c899190611ad8565b611144565b610cd13073bbb9dbc0e769e5934da69f9e5eea0526155fb5da606460056b19d971e4fe8401e740000000610cc29190611a67565b610ccc9190611ad8565b611144565b610d143073fb22b7409ea071243fd1f98d05a11807de0d002c606460056b19d971e4fe8401e740000000610d059190611a67565b610d0f9190611ad8565b611144565b610d57307394ada1fa5f86124607bf2d860ea055b33588d65b606460036b19d971e4fe8401e740000000610d489190611a67565b610d529190611ad8565b611144565b610d9b30732afd6c9b1ee109614773e5f4ace498564256b7036103e860196b19d971e4fe8401e740000000610d8c9190611a67565b610d969190611ad8565b611144565b610dde30732901a3cab9a64e40be94a2f2118c8adb32710646606460016b19d971e4fe8401e740000000610dcf9190611a67565b610dd99190611ad8565b611144565b5b565b600080610dec6109d0565b9050610df98582856113ba565b610e04858585611144565b60019150509392505050565b610e186109d0565b73ffffffffffffffffffffffffffffffffffffffff16610e3661071f565b73ffffffffffffffffffffffffffffffffffffffff1614610e8c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e8390611b55565b60405180910390fd5b565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080610f5f6109d0565b9050610f6c818585611144565b600191505092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610fe6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fdd90611be7565b60405180910390fd5b610ff282600083611446565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015611078576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161106f90611c79565b60405180910390fd5b8181036000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600260008282540392505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161112b9190611620565b60405180910390a361113f8360008461144b565b505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036111b3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111aa90611d0b565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611222576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161121990611d9d565b60405180910390fd5b61122d838383611446565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050818110156112b3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112aa90611e2f565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516113a19190611620565b60405180910390a36113b484848461144b565b50505050565b60006113c684846108ae565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146114405781811015611432576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161142990611e9b565b60405180910390fd5b61143f84848484036109d8565b5b50505050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561148a57808201518184015260208101905061146f565b60008484015250505050565b6000601f19601f8301169050919050565b60006114b282611450565b6114bc818561145b565b93506114cc81856020860161146c565b6114d581611496565b840191505092915050565b600060208201905081810360008301526114fa81846114a7565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061153282611507565b9050919050565b61154281611527565b811461154d57600080fd5b50565b60008135905061155f81611539565b92915050565b6000819050919050565b61157881611565565b811461158357600080fd5b50565b6000813590506115958161156f565b92915050565b600080604083850312156115b2576115b1611502565b5b60006115c085828601611550565b92505060206115d185828601611586565b9150509250929050565b60008115159050919050565b6115f0816115db565b82525050565b600060208201905061160b60008301846115e7565b92915050565b61161a81611565565b82525050565b60006020820190506116356000830184611611565b92915050565b60008060006060848603121561165457611653611502565b5b600061166286828701611550565b935050602061167386828701611550565b925050604061168486828701611586565b9150509250925092565b61169781611527565b82525050565b60006020820190506116b2600083018461168e565b92915050565b600060ff82169050919050565b6116ce816116b8565b82525050565b60006020820190506116e960008301846116c5565b92915050565b60006020828403121561170557611704611502565b5b600061171384828501611550565b91505092915050565b6000806040838503121561173357611732611502565b5b600061174185828601611550565b925050602061175285828601611550565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806117a357607f821691505b6020821081036117b6576117b561175c565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006117f682611565565b915061180183611565565b9250828201905080821115611819576118186117bc565b5b92915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b600061187b60258361145b565b91506118868261181f565b604082019050919050565b600060208201905081810360008301526118aa8161186e565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b600061190d60268361145b565b9150611918826118b1565b604082019050919050565b6000602082019050818103600083015261193c81611900565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b600061199f60248361145b565b91506119aa82611943565b604082019050919050565b600060208201905081810360008301526119ce81611992565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000611a3160228361145b565b9150611a3c826119d5565b604082019050919050565b60006020820190508181036000830152611a6081611a24565b9050919050565b6000611a7282611565565b9150611a7d83611565565b9250828202611a8b81611565565b91508282048414831517611aa257611aa16117bc565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000611ae382611565565b9150611aee83611565565b925082611afe57611afd611aa9565b5b828204905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000611b3f60208361145b565b9150611b4a82611b09565b602082019050919050565b60006020820190508181036000830152611b6e81611b32565b9050919050565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b6000611bd160218361145b565b9150611bdc82611b75565b604082019050919050565b60006020820190508181036000830152611c0081611bc4565b9050919050565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b6000611c6360228361145b565b9150611c6e82611c07565b604082019050919050565b60006020820190508181036000830152611c9281611c56565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b6000611cf560258361145b565b9150611d0082611c99565b604082019050919050565b60006020820190508181036000830152611d2481611ce8565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000611d8760238361145b565b9150611d9282611d2b565b604082019050919050565b60006020820190508181036000830152611db681611d7a565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b6000611e1960268361145b565b9150611e2482611dbd565b604082019050919050565b60006020820190508181036000830152611e4881611e0c565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b6000611e85601d8361145b565b9150611e9082611e4f565b602082019050919050565b60006020820190508181036000830152611eb481611e78565b905091905056fea26469706673582212207e37ea874270c5b1b5778bce2d7a9cd3221dc2266d3ab7fb2dcd2dde9370561364736f6c63430008120033";

type MainConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MainConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Main__factory extends ContractFactory {
  constructor(...args: MainConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Main> {
    return super.deploy(overrides || {}) as Promise<Main>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Main {
    return super.attach(address) as Main;
  }
  override connect(signer: Signer): Main__factory {
    return super.connect(signer) as Main__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MainInterface {
    return new utils.Interface(_abi) as MainInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Main {
    return new Contract(address, _abi, signerOrProvider) as Main;
  }
}
