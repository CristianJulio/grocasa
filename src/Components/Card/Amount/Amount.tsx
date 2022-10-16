import * as SC from './amount.style'

interface AmountProps {
  children: string
}

const Amount = ({ children }: AmountProps) => {
  return (
    <SC.AmountWrapper>{children}</SC.AmountWrapper>
  )
}

export default Amount