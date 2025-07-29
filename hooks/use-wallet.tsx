"use client"

import { createContext, useEffect, useState, type ReactNode } from "react"
import { useWeb3 } from "@/components/providers/web3-provider"

interface WalletContextType {
  isConnected: boolean
  account: string | null
  chainId: number | null
  connect: () => Promise<void>
  disconnect: () => void
  switchToSepolia: () => Promise<void>
}

const WalletContext = createContext<WalletContextType | undefined>(undefined)

export function WalletProvider({ children }: { children: ReactNode }) {
  const [isConnected, setIsConnected] = useState(false)
  const [account, setAccount] = useState<string | null>(null)
  const [chainId, setChainId] = useState<number | null>(null)

  const connect = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        })
        const chainId = await window.ethereum.request({
          method: "eth_chainId",
        })

        setAccount(accounts[0])
        setChainId(Number.parseInt(chainId, 16))
        setIsConnected(true)
      } catch (error) {
        console.error("Failed to connect wallet:", error)
      }
    } else {
      alert("Please install MetaMask or another Web3 wallet")
    }
  }

  const disconnect = () => {
    setAccount(null)
    setChainId(null)
    setIsConnected(false)
  }

  const switchToSepolia = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0xaa36a7" }], // Sepolia testnet
        })
      } catch (error: any) {
        if (error.code === 4902) {
          // Chain not added, add it
          try {
            await window.ethereum.request({
              method: "wallet_addEthereumChain",
              params: [
                {
                  chainId: "0xaa36a7",
                  chainName: "Sepolia Testnet",
                  nativeCurrency: {
                    name: "ETH",
                    symbol: "ETH",
                    decimals: 18,
                  },
                  rpcUrls: ["https://sepolia.infura.io/v3/"],
                  blockExplorerUrls: ["https://sepolia.etherscan.io/"],
                },
              ],
            })
          } catch (addError) {
            console.error("Failed to add Sepolia network:", addError)
          }
        } else {
          console.error("Failed to switch to Sepolia:", error)
        }
      }
    }
  }

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      // Check if already connected
      window.ethereum.request({ method: "eth_accounts" }).then((accounts: string[]) => {
        if (accounts.length > 0) {
          setAccount(accounts[0])
          setIsConnected(true)

          // Get chain ID
          window.ethereum.request({ method: "eth_chainId" }).then((chainId: string) => {
            setChainId(Number.parseInt(chainId, 16))
          })
        }
      })

      // Listen for account changes
      window.ethereum.on("accountsChanged", (accounts: string[]) => {
        if (accounts.length > 0) {
          setAccount(accounts[0])
          setIsConnected(true)
        } else {
          disconnect()
        }
      })

      // Listen for chain changes
      window.ethereum.on("chainChanged", (chainId: string) => {
        setChainId(Number.parseInt(chainId, 16))
        // Reload the page to reset the app state
        window.location.reload()
      })
    }
  }, [])

  return (
    <WalletContext.Provider
      value={{
        isConnected,
        account,
        chainId,
        connect,
        disconnect,
        switchToSepolia,
      }}
    >
      {children}
    </WalletContext.Provider>
  )
}

export function useWallet() {
  return useWeb3()
}
