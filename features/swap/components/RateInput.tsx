import { Button, styled, Text } from 'junoblocks'
import React, { useRef, useState } from 'react'

import { SelectorInput } from './SelectorInput'

type RateInputProps = {
  readOnly?: boolean
  disabled?: boolean
  amount: number
  onChange: (amount: number) => void
  size?: 'small' | 'large'
}

export const RateInput = ({
  disabled,
  amount,
  onChange,
  size = 'large',
}: RateInputProps) => {
  const wrapperRef = useRef<HTMLDivElement>()
  const inputRef = useRef<HTMLInputElement>()

  const [isInputForAmountFocused, setInputForAmountFocused] = useState(false)

  if (size === 'small') {
    return <></>
  }

  const headerText = (
    <StyledDivForWrapper>
      <Text
        variant="primary"
        transform="capitalize"
        css={{ paddingLeft: '10px', fontWeight: 'bolder' }}
      >
        Rate
      </Text>
    </StyledDivForWrapper>
  )

  const currentButton = (
    <Button
      variant="primary"
      size="small"
      onClick={() => {}}
      css={{ padding: '0.1rem 0.5rem' }}
    >
      Current
    </Button>
  )

  return (
    <StyledDivForContainer selected={isInputForAmountFocused} ref={wrapperRef}>
      {headerText}
      <StyledDivForWrapper>
        {currentButton}
        <StyledDivForAmountWrapper>
          <SelectorInput
            inputRef={inputRef}
            amount={amount}
            disabled={disabled}
            onAmountChange={() => {}}
            onFocus={() => setInputForAmountFocused(true)}
            onBlur={() => setInputForAmountFocused(false)}
          />
        </StyledDivForAmountWrapper>
      </StyledDivForWrapper>
    </StyledDivForContainer>
  )
}

const selectedVariantForInputWrapper = {
  true: {
    boxShadow: '0 0 0 $space$1 $borderColors$selected',
  },
  false: {
    boxShadow: '0 0 0 $space$1 $colors$dark0',
    '&:hover': {
      backgroundColor: '$colors$dark5',
    },
  },
}

const StyledDivForContainer = styled('div', {
  borderRadius: '$2',
  transition: 'box-shadow .1s ease-out',
  variants: {
    selected: selectedVariantForInputWrapper,
  },
})

const StyledDivForWrapper = styled('div', {
  padding: '$5 $15 $5 $7',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  zIndex: 0,
})

const StyledDivForAmountWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  position: 'relative',
  zIndex: 1,
})
