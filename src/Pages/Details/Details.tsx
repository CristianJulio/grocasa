import { HOME } from '../../Routes/routes'
import { Logo } from '../../Components/Header/Logo/logo.style'
import { useState } from 'react'
import Back from '../../Components/Back/Back'
import Button from '../../Components/Button/Button'
import Buttons from './Buttons/Buttons'
import Carousel from './Carousel/Carousel'
import grocasaLogo from '../../assets/Grocasa.png'
import Header from '../../Components/Header/Header'
import HouseData from './HouseData/HouseData'
import Interest from './Interest/Interest'
import Map from './Map/Map'
import Properties from './Properties/Properties'
import Switch from '../../Components/Switch/Switch'

const Details = () => {
  const [isActive, setIsActive] = useState<boolean>(false)

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
      <Buttons>
        <Switch status={isActive} setStatus={setIsActive} />
        <Button>Contactar</Button>
      </Buttons>
      <Interest />
    </>
  )
}

export default Details