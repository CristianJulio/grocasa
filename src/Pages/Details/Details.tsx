import { HOME } from '../../Routes/routes'
import { Logo } from '../../Components/Header/Logo/logo.style'
import Back from '../../Components/Back/Back'
import Carousel from './Carousel/Carousel'
import grocasaLogo from '../../assets/Grocasa.png'
import Header from '../../Components/Header/Header'
import HouseData from './HouseData/HouseData'
import Map from './Map/Map'
import Properties from './Properties/Properties'

const Details = () => {
  return (
    <>
      <Header>
        <Back to={HOME} />
        <Logo src={grocasaLogo} alt="logo de Grocasa" />
      </Header>
      <Carousel />
      <HouseData />
      <Properties />
      <Map />
    </>
  )
}

export default Details