import * as SC from './buttons.style'

interface ButtonsProps {
  children: JSX.Element | JSX.Element[]
}

const Buttons = ({ children }: ButtonsProps) => {
  return (
    <SC.ButtonsWrapper style={{ marginBottom: "20px" }}>
      {children}
    </SC.ButtonsWrapper>
  )
}

export default Buttons