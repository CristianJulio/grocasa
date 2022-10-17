import Card from '../../../Components/Card/Card'
import * as SC from './interest.style'

const Interest = () => {
  return (
    <SC.InterestWrapper>
      <SC.Title>También pueden interesarte</SC.Title>
      <SC.CardsWrapper>
        <Card />
        <Card />
      </SC.CardsWrapper>
    </SC.InterestWrapper>
  )
}

export default Interest