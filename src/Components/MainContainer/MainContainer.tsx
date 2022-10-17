import * as SC from './mainContainer.style'

interface MainContainerProps {
  children: JSX.Element | JSX.Element[]
}

const MainContainer = ({ children }: MainContainerProps) => {
  return (
    <SC.MainContainerStyled>{children}</SC.MainContainerStyled>
  )
}

export default MainContainer