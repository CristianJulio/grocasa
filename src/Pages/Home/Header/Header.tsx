import grocasaLogo from '../../../assets/Grocasa.png'
import * as SC from './header.style'

const Header = () => {
  return (
    <SC.HeaderWrapper>
      <SC.Logo src={grocasaLogo} alt="logo de grocasa" />
    </SC.HeaderWrapper>
  )
}

export default Header