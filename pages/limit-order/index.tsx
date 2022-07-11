import { AppLayout, PageHeader } from 'components'
import { styled } from 'junoblocks'
import React from 'react'

import { LimitOrderModule } from '../../features/swap/components/LimitOrderModule'
import { APP_NAME } from '../../util/constants'

function getInitialTokenPairFromSearchParams() {
  const params = new URLSearchParams(location.search)
  const from = params.get('from')
  const to = params.get('to')
  return from || to ? ([from, to] as const) : undefined
}

export default function LimitOrder() {
  return (
    <AppLayout>
      <StyledContainer>
        <PageHeader
          title="Limit Order"
          subtitle={`Swap between your favorite assets on ${APP_NAME}.`}
        />
        <LimitOrderModule
          initialTokenPair={getInitialTokenPairFromSearchParams()}
        />
      </StyledContainer>
    </AppLayout>
  )
}

const StyledContainer = styled('div', {
  maxWidth: '53.75rem',
  margin: '0 auto',
})
