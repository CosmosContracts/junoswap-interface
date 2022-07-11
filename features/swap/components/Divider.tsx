import { styled } from 'junoblocks'

type DividerProps = {
  size?: 'small' | 'large'
}

export const HorizontalDivider = ({ size = 'small' }: DividerProps) => {
  return (
    <StyledDivForHorizontalContainer size={size === 'large' ? true : false} />
  )
}

export const VerticalDivider = ({ size = 'small' }: DividerProps) => {
  return (
    <StyledDivForVerticalContainer size={size === 'large' ? true : false} />
  )
}

const StyledDivForHorizontalContainer = styled('div', {
  width: '100%',
  backgroundColor: '$borderColors$inactive',
  variants: {
    size: {
      true: {
        height: '2px',
      },
      false: {
        height: '1px',
      },
    },
  },
})

const StyledDivForVerticalContainer = styled('div', {
  backgroundColor: '$borderColors$inactive',
  variants: {
    size: {
      true: {
        width: '2px',
      },
      false: {
        width: '1px',
      },
    },
  },
})
