import * as SC from './amount.style'

interface AmountProps {
  children: string
  color?: string
}

const Amount = ({ children, color }: AmountProps) => {
  return (
    <SC.AmountWrapper color={color}>{children}</SC.AmountWrapper>
  )
}

export default Amount