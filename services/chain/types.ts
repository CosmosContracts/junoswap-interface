import { AppCurrency, ChainInfo } from '@keplr-wallet/types'

export interface ChainInfoWithExplorer extends ChainInfo {
  /** Formed as "https://explorer.com/{txHash}" */
  explorerUrlToTx: string
  /** Add optional stable coin peg info to currencies. */
  currencies: Array<
    AppCurrency & {
      pegMechanism?: 'collateralized' | 'algorithmic' | 'hybrid'
    }
  >
}

export type PeggedCurrency = AppCurrency & {
  originCurrency?: AppCurrency & {
    /** For assets that are pegged/stablecoins. */
    pegMechanism?: 'algorithmic' | 'collateralized' | 'hybrid'
  }
}

export type SimplifiedChainInfo = Omit<
  ChainInfoWithExplorer,
  'stakeCurrency' | 'feeCurrencies'
> & {
  currencies: Array<
    AppCurrency &
      PeggedCurrency & {
        isStakeCurrency?: boolean
        isFeeCurrency?: boolean
      }
  >
}
