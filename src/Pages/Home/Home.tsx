import { useEffect } from 'react'
import * as SC from './home.style'
import Card from '../../Components/Card/Card'
import Header from './Header/Header'

const Home = () => {
  useEffect(() => {
    // window.alert(window.screen.availWidth)
  }, [])

  return (
    <div>
      <Header />
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