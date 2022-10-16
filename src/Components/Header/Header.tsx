import * as SC from './header.style'

interface HeaderProps {
  children: JSX.Element | JSX.Element[]
}

const Header = ({ children }: HeaderProps) => {
  return (
    <SC.HeaderWrapper>
      {children}
    </SC.HeaderWrapper>
  )
}

export default Header