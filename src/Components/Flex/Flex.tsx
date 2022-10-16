import * as SC from './flex.style'

interface FlexWrapperProps {
  children: JSX.Element | JSX.Element[]
}

const Flex = ({ children }: FlexWrapperProps) => {
  return (
    <SC.FlexWrapper>{children}</SC.FlexWrapper>
  )
}

export default Flex