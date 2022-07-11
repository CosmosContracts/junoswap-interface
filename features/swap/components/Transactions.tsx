import { useConnectWallet } from 'hooks/useConnectWallet'
import { useTokenBalance } from 'hooks/useTokenBalance'
import {
  Button,
  ImageForTokenLogo,
  Inline,
  Spinner,
  styled,
  Text,
} from 'junoblocks'
import React, { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { walletState, WalletStatusType } from 'state/atoms/walletAtoms'
import { NETWORK_FEE } from 'util/constants'

import { useTokenSwap } from '../hooks'
import { slippageAtom, tokenSwapAtom } from '../swapAtoms'
import { VerticalDivider } from './Divider'
import { SlippageSelector } from './SlippageSelector'

const transactions = [0, 1]

type TransactionsProps = {}

export const Transactions = ({}: TransactionsProps) => {
  const [activeTab, setActiveTab] = useState('open')

  return (
    <StyledDivForWrapper>
      <StyledDivForTabs>
        <StyledButtonForTabs
          variant="ghost"
          size="large"
          onClick={() => setActiveTab('open')}
          active={activeTab === 'open'}
        >
          <Text variant="body">open</Text>
        </StyledButtonForTabs>
        <StyledButtonForTabs
          variant="ghost"
          size="large"
          onClick={() => setActiveTab('executed')}
          active={activeTab === 'executed'}
        >
          <Text variant="body">executed</Text>
        </StyledButtonForTabs>
        <StyledButtonForTabs
          variant="ghost"
          size="large"
          onClick={() => setActiveTab('cancelled')}
          active={activeTab === 'cancelled'}
        >
          <Text variant="body">cancelled</Text>
        </StyledButtonForTabs>
      </StyledDivForTabs>
      <StyledDivForTransactionContainer>
        {transactions.map((transaction) => (
          <StyledDivForTransaction key={`transaction_${transaction}`}>
            <Inline css={{ display: 'flex', justifyContent: 'space-between' }}>
              <Inline css={{ display: 'flex' }}>
                <ImageForTokenLogo
                  logoURI="https://autonomy-osmosis-wrapper.netlify.app/tokens/osmo.svg"
                  size="big"
                  alt="Osmo"
                  loading="lazy"
                  css={{ marginRight: '$space$6' }}
                />
                <Text
                  variant="caption"
                  css={{ marginRight: '$space$18', fontWeight: 'bolder' }}
                >
                  OSMO
                </Text>
                <Text
                  variant="caption"
                  css={{ marginRight: '$space$18', fontWeight: 'bolder' }}
                >
                  {'->'}
                </Text>
                <ImageForTokenLogo
                  logoURI="https://autonomy-osmosis-wrapper.netlify.app/tokens/atom.svg"
                  size="big"
                  alt="Atom"
                  loading="lazy"
                  css={{ marginRight: '$space$6' }}
                />
                <Text variant="caption" css={{ fontWeight: 'bolder' }}>
                  ATOM
                </Text>
              </Inline>
              <StyledButtonCancel
                variant="primary"
                style={{ backgroundColor: '$colors$error70' }}
              >
                Cancel
              </StyledButtonCancel>
            </Inline>
            <Text
              variant="caption"
              css={{
                fontWeight: 'bolder',
                textAlign: 'left',
                margin: '$space$4 0',
              }}
            >
              Sell 1 OSMO for 0.35 ATOM
            </Text>
            <Text variant="caption" css={{ textAlign: 'left' }}>
              {new Date().toJSON().slice(0, 10).replace(/-/g, '/')}
            </Text>
          </StyledDivForTransaction>
        ))}
      </StyledDivForTransactionContainer>
    </StyledDivForWrapper>
  )
}

const StyledDivForWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  borderRadius: '6px',
  backgroundColor: '$colors$dark10',
})

const StyledDivForTabs = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  alignItems: 'stretch',
  textTransform: 'uppercase',
  borderRadius: 8,
  height: '100%',
  width: '100%',
  padding: '$space$6 $space$12 0 $space$12',
})

const StyledButtonForTabs = styled(Button, {
  flex: '1',
  textTransform: 'capitalize',
  background: 'transparent',
  borderBottomLeftRadius: '0',
  borderBottomRightRadius: '0',
  opacity: '.5',
  '&:hover': {
    backgroundColor: 'transparent',
  },
  '&:focus': {
    backgroundColor: 'transparent',
  },
  variants: {
    active: {
      true: {
        opacity: '1',
        borderBottom: '2px solid $colors$dark20',
      },
    },
  },
})

const StyledDivForTransactionContainer = styled('div', {
  paddingTop: '$space$6',
  paddingBottom: '$space$6',
  width: '100%',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

const StyledDivForTransaction = styled('div', {
  borderRadius: '10px',
  border: '1px solid $colors$dark10',
  display: 'flex',
  flexDirection: 'column',
  padding: '$space$6',
  margin: '$space$6 0',
  width: 'calc(100% - $space$24)',
})

const StyledButtonCancel = styled(Button, {
  background: '$colors$error90',
  '&:hover': {
    backgroundColor: '$colors$error70',
  },
})
