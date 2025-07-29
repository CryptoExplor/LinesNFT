export const CONTRACTS = {
  sepolia: {
    chainId: 11155111,
    address: "0x240c2088d4a1e622c0f1797c6bf00729024186cb",
    name: "Sepolia Testnet",
    explorer: "https://sepolia.etherscan.io",
    rpcUrl: "https://sepolia.infura.io/v3/",
    nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18 },
  },
  arbitrumSepolia: {
    chainId: 421614,
    address: "0x555cbef836acdf9d5e310183f197e001bb27a673",
    name: "Arbitrum Sepolia",
    explorer: "https://sepolia.arbiscan.io",
    rpcUrl: "https://sepolia-rollup.arbitrum.io/rpc",
    nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18 },
  },
  baseSepolia: {
    chainId: 84532,
    address: "0x11044DB76BfDb44d2dD9B753bfb1E5f0e891d27a",
    name: "Base Sepolia",
    explorer: "https://sepolia.basescan.org",
    rpcUrl: "https://sepolia.base.org",
    nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18 },
  },
  holesky: {
    chainId: 17000,
    address: "0xe6653b4422498bF8e63Ff616B8058d95bF868838",
    name: "Holesky Testnet",
    explorer: "https://holesky.etherscan.io",
    rpcUrl: "https://ethereum-holesky.publicnode.com",
    nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18 },
  },
  inkSepolia: {
    chainId: 763373,
    address: "0x0dEeD9740602fB7B4B2Ff19f3606913a5b027238",
    name: "Ink Sepolia",
    explorer: "https://explorer-sepolia.inkonchain.com",
    rpcUrl: "https://rpc-gel-sepolia.inkonchain.com",
    nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18 },
  },
  nexus: {
    chainId: 39400,
    address: "0x4D5E128786a79dfFcA2092b70bAaafaDe7A82f24",
    name: "Nexus Testnet",
    explorer: "https://explorer.nexus.org",
    rpcUrl: "https://rpc.nexus.org",
    nativeCurrency: { name: "NXS", symbol: "NXS", decimals: 18 },
  },
  pharosTestnet: {
    chainId: 688688,
    address: "0xc34a1ad4abcfb7a9451cbec47931707222d017ec",
    name: "Pharos Testnet",
    explorer: "https://explorer.pharos.org",
    rpcUrl: "https://rpc.pharos.org",
    nativeCurrency: { name: "PHAR", symbol: "PHAR", decimals: 18 },
  },
  unichainSepolia: {
    chainId: 1301,
    address: "0xe1cf8f32cf19b8a3510cc9ab21f94c9010431c73",
    name: "Unichain Sepolia",
    explorer: "https://sepolia.uniscan.xyz",
    rpcUrl: "https://sepolia.unichain.org",
    nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18 },
  },
  megaethTestnet: {
    chainId: 6342,
    address: "0x00432b1784caa0907455cff81a1c62250587feaa",
    name: "Megaeth Testnet",
    explorer: "https://explorer.megaeth.systems",
    rpcUrl: "https://rpc.megaeth.systems",
    nativeCurrency: { name: "MEGA", symbol: "MEGA", decimals: 18 },
  },
  zeroGGalileo: {
    chainId: 16601,
    address: "0xf08bcb95da5b27e74306e1d77d8ad1e02ce9389c",
    name: "0G Galileo",
    explorer: "https://explorer.galileo.web3q.io",
    rpcUrl: "https://rpc.galileo.web3q.io",
    nativeCurrency: { name: "0G", symbol: "0G", decimals: 18 },
  },
  monadTestnet: {
    chainId: 10143,
    address: "0x030a5A0654d034Ca01eD0eda6b75C053b9BEb828",
    name: "Monad Testnet",
    explorer: "https://explorer.testnet.monad.xyz",
    rpcUrl: "https://rpc.testnet.monad.xyz",
    nativeCurrency: { name: "MON", symbol: "MON", decimals: 18 },
  },
} as const

export const LINES_ABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ERC721IncorrectOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ERC721InsufficientApproval",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC721InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "ERC721InvalidOperator",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ERC721InvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC721InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC721InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ERC721NonexistentToken",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    inputs: [],
    name: "ReentrancyGuardReentrantCall",
    type: "error",
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
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_fromTokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_toTokenId",
        type: "uint256",
      },
    ],
    name: "BatchMetadataUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "MetadataUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "Minted",
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
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "MAX_SUPPLY",
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
    name: "MINT_PRICE",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "mint",
    outputs: [],
    stateMutability: "payable",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
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
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const

export function getContractForChain(chainId: number) {
  const contract = Object.values(CONTRACTS).find((c) => c.chainId === chainId)
  if (!contract || !contract.address) {
    throw new Error(`Contract not deployed on chain ${chainId}`)
  }
  return contract
}

export function getSupportedChains() {
  return Object.values(CONTRACTS).filter((c) => c.address !== "")
}

export function getNetworkConfig(chainId: number) {
  const contract = getContractForChain(chainId)
  return {
    chainId: `0x${chainId.toString(16)}`,
    chainName: contract.name,
    nativeCurrency: contract.nativeCurrency,
    rpcUrls: [contract.rpcUrl],
    blockExplorerUrls: [contract.explorer],
  }
}
