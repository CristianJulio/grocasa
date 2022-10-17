import Card from '../../../Components/Card/Card'
import * as SC from './interest.style'

const Interest = () => {
  return (
    <SC.InterestWrapper>
      <h3>También pueden interesarte</h3>
      <SC.CardsWrapper>
        <Card />
        <Card />
      </SC.CardsWrapper>
    </SC.InterestWrapper>
  )
}

export default Interest