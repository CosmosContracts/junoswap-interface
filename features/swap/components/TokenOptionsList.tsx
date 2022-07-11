import { TokenSelectList, TokenSelectListProps } from 'components'
import { useTokenList } from 'hooks/useTokenList'

export const TokenOptionsList = ({
  activeTokenSymbol,
  onSelect,
  ...props
}: Omit<
  TokenSelectListProps,
  'tokenList' | 'fetchingBalanceMode' | 'chainInfos'
>) => {
  const [tokenList] = useTokenList()
  return (
    <TokenSelectList
      {...props}
      tokenList={tokenList.tokens}
      chainInfos={tokenList.chainInfos}
      activeTokenSymbol={activeTokenSymbol}
      onSelect={onSelect}
      fetchingBalanceMode="native"
    />
  )
}
