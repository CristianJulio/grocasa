import * as SC from './button.style'

interface ButtonProps {
  children: string
}

const Button = ({ children }: ButtonProps) => {
  return (
    <SC.ButtonStyled>{children}</SC.ButtonStyled>
  )
}

export default Button