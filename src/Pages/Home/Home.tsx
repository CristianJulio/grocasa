import * as SC from './home.style'
import Card from '../../Components/Card/Card'
import grocasaLogo from '../../assets/Grocasa.png'
import Header from '../../Components/Header/Header'
import Logo from '../../Components/Header/Logo/Logo'

const Home = () => {

  return (
    <div>
      <Header>
        <Logo src={grocasaLogo} alt="logo de Grocasa" />
      </Header>
      <SC.CardsWrapper>
        <Card />
        <Card />
        <Card />
        <Card />
      </SC.CardsWrapper>
    </div>
  )
}

export default Home