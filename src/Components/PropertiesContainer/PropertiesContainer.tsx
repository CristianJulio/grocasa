import * as SC from './PropertiesContainerStyled.style'

interface PropertiesContainerProps {
  children: JSX.Element | JSX.Element[]
}

const PropertiesContainer = ({ children }: PropertiesContainerProps) => {
  return (
    <SC.PropertiesContainerStyled>{children}</SC.PropertiesContainerStyled>
  )
}

export default PropertiesContainer