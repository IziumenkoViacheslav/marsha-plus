/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { MarshaPlus, MarshaPlusInterface } from "../MarshaPlus";

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
    name: "advisor",
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
        name: "",
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
        internalType: "uint256",
        name: "_tokens",
        type: "uint256",
      },
    ],
    name: "depositTokenToStacking",
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
    name: "developer",
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
    name: "owner",
    outputs: [
      {
        internalType: "address payable",
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
        name: "",
        type: "address",
      },
    ],
    name: "stackingFromWalletDate",
    outputs: [
      {
        internalType: "uint256",
        name: "date",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokens",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "technical",
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
    name: "token_name",
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
    name: "token_symbol",
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
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transferTo",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawTokenFromStacking",
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
] as const;

const _bytecode =
  "0x60806040526040518060400160405280600781526020017f4d41525348412b00000000000000000000000000000000000000000000000000815250600090816200004a9190620006cc565b506040518060400160405280600381526020017f4d5241000000000000000000000000000000000000000000000000000000000081525060019081620000919190620006cc565b5060646002556012600360006101000a81548160ff021916908360ff160217905550348015620000c057600080fd5b504260048190555060646023600254620000db9190620007e2565b620000e791906200085c565b60056000735b38da6a701c568545dcfcb03fcb875f56beddc473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550735b38da6a701c568545dcfcb03fcb875f56beddc473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60056000735b38da6a701c568545dcfcb03fcb875f56beddc473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054604051620002049190620008a5565b60405180910390a3606460196002546200021f9190620007e2565b6200022b91906200085c565b600560007370997970c51812dc3a010c7d01b50e0d17dc79c873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060646008600254620002959190620007e2565b620002a191906200085c565b60056000733c44cdddb6a900fa2b585dd299e03d12fa4293bc73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060146002546200030991906200085c565b600560007390f79bf6eb2c4f870365e785982e1f101e93b90673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506064600a600254620003739190620007e2565b6200037f91906200085c565b6005600073ab8483f64d9c6d1ecf9b849ae677dd3315835cb273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060646005600254620003e99190620007e2565b620003f591906200085c565b60056000739965507d1a55bcc2695c58ba16fb37d819b0a4dc73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550620008c2565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620004d457607f821691505b602082108103620004ea57620004e96200048c565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620005547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000515565b62000560868362000515565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620005ad620005a7620005a18462000578565b62000582565b62000578565b9050919050565b6000819050919050565b620005c9836200058c565b620005e1620005d882620005b4565b84845462000522565b825550505050565b600090565b620005f8620005e9565b62000605818484620005be565b505050565b5b818110156200062d5762000621600082620005ee565b6001810190506200060b565b5050565b601f8211156200067c576200064681620004f0565b620006518462000505565b8101602085101562000661578190505b62000679620006708562000505565b8301826200060a565b50505b505050565b600082821c905092915050565b6000620006a16000198460080262000681565b1980831691505092915050565b6000620006bc83836200068e565b9150826002028217905092915050565b620006d78262000452565b67ffffffffffffffff811115620006f357620006f26200045d565b5b620006ff8254620004bb565b6200070c82828562000631565b600060209050601f8311600181146200074457600084156200072f578287015190505b6200073b8582620006ae565b865550620007ab565b601f1984166200075486620004f0565b60005b828110156200077e5784890151825560018201915060208501945060208101905062000757565b868310156200079e57848901516200079a601f8916826200068e565b8355505b6001600288020188555050505b505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000620007ef8262000578565b9150620007fc8362000578565b92508282026200080c8162000578565b91508282048414831517620008265762000825620007b3565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000620008698262000578565b9150620008768362000578565b9250826200088957620008886200082d565b5b828204905092915050565b6200089f8162000578565b82525050565b6000602082019050620008bc600083018462000894565b92915050565b611b8180620008d26000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c806341fbb050116100975780639d8a4965116100665780639d8a4965146102b6578063b691c66a146102d4578063ca4b208b146102f2578063dc1fb5a51461031057610100565b806341fbb0501461022c57806370a082311461024a5780638da5cb5b1461027a578063947a31681461029857610100565b80632bfc4a14116100d35780632bfc4a14146101905780632ccb1b30146101c05780632d3e474a146101f0578063313ce5671461020e57610100565b806309c2dfd31461010557806318160ddd146101365780631936e4be146101545780631f772a3414610172575b600080fd5b61011f600480360381019061011a9190611338565b61032e565b60405161012d92919061137e565b60405180910390f35b61013e610352565b60405161014b91906113a7565b60405180910390f35b61015c610358565b60405161016991906113d1565b60405180910390f35b61017a610370565b604051610187919061147c565b60405180910390f35b6101aa60048036038101906101a591906114ca565b6103fe565b6040516101b79190611512565b60405180910390f35b6101da60048036038101906101d5919061152d565b6106ce565b6040516101e79190611512565b60405180910390f35b6101f86109e0565b60405161020591906113d1565b60405180910390f35b6102166109f8565b6040516102239190611589565b60405180910390f35b610234610a0b565b60405161024191906113d1565b60405180910390f35b610264600480360381019061025f9190611338565b610a23565b60405161027191906113a7565b60405180910390f35b610282610a3b565b60405161028f91906115c5565b60405180910390f35b6102a0610a61565b6040516102ad919061147c565b60405180910390f35b6102be610aef565b6040516102cb91906113d1565b60405180910390f35b6102dc610b07565b6040516102e99190611512565b60405180910390f35b6102fa610e69565b60405161030791906113d1565b60405180910390f35b610318610e81565b60405161032591906113d1565b60405180910390f35b60086020528060005260406000206000915090508060000154908060010154905082565b60025481565b7390f79bf6eb2c4f870365e785982e1f101e93b90681565b6001805461037d9061160f565b80601f01602080910402602001604051908101604052809291908181526020018280546103a99061160f565b80156103f65780601f106103cb576101008083540402835291602001916103f6565b820191906000526020600020905b8154815290600101906020018083116103d957829003601f168201915b505050505081565b600081600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015610482576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104799061168c565b60405180910390fd5b6000600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101541115610508576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104ff906116f8565b60405180910390fd5b61055a82600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610e9990919063ffffffff16565b600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550604051806040016040528042815260200183815250600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082015181600001556020820151816001015590505061066e8260056000735b38da6a701c568545dcfcb03fcb875f56beddc473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610ee390919063ffffffff16565b60056000735b38da6a701c568545dcfcb03fcb875f56beddc473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060019050919050565b600080600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16036107c6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107bd90611764565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1603610834576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082b90611764565b60405180910390fd5b6000841015610878576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161086f906117f6565b60405180910390fd5b8382116108ba576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108b190611862565b60405180910390fd5b6108cd8483610e9990919063ffffffff16565b600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506109238482610ee390919063ffffffff16565b600560008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef866040516109c391906113a7565b60405180910390a36109d3610f41565b5060019250505092915050565b733c44cdddb6a900fa2b585dd299e03d12fa4293bc81565b600360009054906101000a900460ff1681565b7370997970c51812dc3a010c7d01b50e0d17dc79c881565b60056020528060005260406000206000915090505481565b600360019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054610a6e9061160f565b80601f0160208091040260200160405190810160405280929190818152602001828054610a9a9061160f565b8015610ae75780601f10610abc57610100808354040283529160200191610ae7565b820191906000526020600020905b815481529060010190602001808311610aca57829003601f168201915b505050505081565b739965507d1a55bcc2695c58ba16fb37d819b0a4dc81565b600080600790506000610b7b6064610b6d8460ff16600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001015461114a90919063ffffffff16565b6111c490919063ffffffff16565b9050610bd3600a600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000154610ee390919063ffffffff16565b4211610c14576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c0b906118f4565b60405180910390fd5b610cce81610cc0600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001015460056000735b38da6a701c568545dcfcb03fcb875f56beddc473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610e9990919063ffffffff16565b610e9990919063ffffffff16565b60056000735b38da6a701c568545dcfcb03fcb875f56beddc473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610dcb81610dbd600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610ee390919063ffffffff16565b610ee390919063ffffffff16565b600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000808201600090556001820160009055505060019250505090565b73ab8483f64d9c6d1ecf9b849ae677dd3315835cb281565b735b38da6a701c568545dcfcb03fcb875f56beddc481565b6000610edb83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525061120e565b905092915050565b6000808284610ef29190611943565b905083811015610f37576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f2e906119c3565b60405180910390fd5b8091505092915050565b600080610f6d6064610f5f600360025461114a90919063ffffffff16565b6111c490919063ffffffff16565b9050610f83600a42610ee390919063ffffffff16565b42118015610fe357508060056000735b38da6a701c568545dcfcb03fcb875f56beddc473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054115b156111425761104e8160056000735b38da6a701c568545dcfcb03fcb875f56beddc473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610e9990919063ffffffff16565b60056000735b38da6a701c568545dcfcb03fcb875f56beddc473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506110ba81600254610e9990919063ffffffff16565b600281905550600073ffffffffffffffffffffffffffffffffffffffff16735b38da6a701c568545dcfcb03fcb875f56beddc473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161113291906113a7565b60405180910390a3426004819055505b600191505090565b600080830361115c57600090506111be565b6000828461116a91906119e3565b90508284826111799190611a54565b146111b9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111b090611af7565b60405180910390fd5b809150505b92915050565b600061120683836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250611272565b905092915050565b6000838311158290611256576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161124d919061147c565b60405180910390fd5b50600083856112659190611b17565b9050809150509392505050565b600080831182906112b9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112b0919061147c565b60405180910390fd5b50600083856112c89190611a54565b9050809150509392505050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611305826112da565b9050919050565b611315816112fa565b811461132057600080fd5b50565b6000813590506113328161130c565b92915050565b60006020828403121561134e5761134d6112d5565b5b600061135c84828501611323565b91505092915050565b6000819050919050565b61137881611365565b82525050565b6000604082019050611393600083018561136f565b6113a0602083018461136f565b9392505050565b60006020820190506113bc600083018461136f565b92915050565b6113cb816112fa565b82525050565b60006020820190506113e660008301846113c2565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561142657808201518184015260208101905061140b565b60008484015250505050565b6000601f19601f8301169050919050565b600061144e826113ec565b61145881856113f7565b9350611468818560208601611408565b61147181611432565b840191505092915050565b600060208201905081810360008301526114968184611443565b905092915050565b6114a781611365565b81146114b257600080fd5b50565b6000813590506114c48161149e565b92915050565b6000602082840312156114e0576114df6112d5565b5b60006114ee848285016114b5565b91505092915050565b60008115159050919050565b61150c816114f7565b82525050565b60006020820190506115276000830184611503565b92915050565b60008060408385031215611544576115436112d5565b5b600061155285828601611323565b9250506020611563858286016114b5565b9150509250929050565b600060ff82169050919050565b6115838161156d565b82525050565b600060208201905061159e600083018461157a565b92915050565b60006115af826112da565b9050919050565b6115bf816115a4565b82525050565b60006020820190506115da60008301846115b6565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061162757607f821691505b60208210810361163a576116396115e0565b5b50919050565b7f596f752068617665206e6f7420656e6f75676820746f6b656e73000000000000600082015250565b6000611676601a836113f7565b915061168182611640565b602082019050919050565b600060208201905081810360008301526116a581611669565b9050919050565b7f596f7520616c7265616479206861766520737461636b696e6700000000000000600082015250565b60006116e26019836113f7565b91506116ed826116ac565b602082019050919050565b60006020820190508181036000830152611711816116d5565b9050919050565b7f5265636569766572206164647265737320696e76616c69640000000000000000600082015250565b600061174e6018836113f7565b915061175982611718565b602082019050919050565b6000602082019050818103600083015261177d81611741565b9050919050565b7f56616c7565206d7573742062652067726561746572206f7220657175616c207460008201527f6f20300000000000000000000000000000000000000000000000000000000000602082015250565b60006117e06023836113f7565b91506117eb82611784565b604082019050919050565b6000602082019050818103600083015261180f816117d3565b9050919050565b7f4e6f7420656e6f7567682062616c616e63650000000000000000000000000000600082015250565b600061184c6012836113f7565b915061185782611816565b602082019050919050565b6000602082019050818103600083015261187b8161183f565b9050919050565b7f4e6f7420656e6f7567682074696d65207061737320666f72207769746864726160008201527f7720737461636b696e6700000000000000000000000000000000000000000000602082015250565b60006118de602a836113f7565b91506118e982611882565b604082019050919050565b6000602082019050818103600083015261190d816118d1565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061194e82611365565b915061195983611365565b925082820190508082111561197157611970611914565b5b92915050565b7f536166654d6174683a206164646974696f6e206f766572666c6f770000000000600082015250565b60006119ad601b836113f7565b91506119b882611977565b602082019050919050565b600060208201905081810360008301526119dc816119a0565b9050919050565b60006119ee82611365565b91506119f983611365565b9250828202611a0781611365565b91508282048414831517611a1e57611a1d611914565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000611a5f82611365565b9150611a6a83611365565b925082611a7a57611a79611a25565b5b828204905092915050565b7f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f60008201527f7700000000000000000000000000000000000000000000000000000000000000602082015250565b6000611ae16021836113f7565b9150611aec82611a85565b604082019050919050565b60006020820190508181036000830152611b1081611ad4565b9050919050565b6000611b2282611365565b9150611b2d83611365565b9250828203905081811115611b4557611b44611914565b5b9291505056fea26469706673582212208e396ba20d89f46ff49ef9003d81dc6c5f523867bc802fe4ff7bdf1097c8b62f64736f6c63430008120033";

type MarshaPlusConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MarshaPlusConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MarshaPlus__factory extends ContractFactory {
  constructor(...args: MarshaPlusConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MarshaPlus> {
    return super.deploy(overrides || {}) as Promise<MarshaPlus>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MarshaPlus {
    return super.attach(address) as MarshaPlus;
  }
  override connect(signer: Signer): MarshaPlus__factory {
    return super.connect(signer) as MarshaPlus__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MarshaPlusInterface {
    return new utils.Interface(_abi) as MarshaPlusInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MarshaPlus {
    return new Contract(address, _abi, signerOrProvider) as MarshaPlus;
  }
}
