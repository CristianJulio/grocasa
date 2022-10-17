import { bathIcon } from '../../assets/icons/icons'
import { bedIcon } from '../../assets/icons/icons'
import { crossIcon } from '../../assets/icons/icons'
import { DETAILS } from '../../Routes/routes'
import * as SC from './card.style'
import Amount from './Amount/Amount'
import Flex from '../Flex/Flex'
import Icon from './Icon/Icon'
import Icons from './Icons/Icons'
import Location from './Location/Location'
import MainImg from '../../assets/Rectangle-1@2x.png'
import MoreInfo from './MoreInfo/MoreInfo'
import Title from './Title/Title'

const Card = () => {
  return (
    <SC.CardWrapper>
      <SC.MainImg src={MainImg} alt="" />
      <Title>Ático Dúplex de Obra Nueva</Title>
      <Location>Mariano, Sant Boi de Llobregat</Location>
      <Flex>
        <Icons>
          <Icon>
            <img src={crossIcon} alt="icono de una cruz" />
            <p>102m^</p>
          </Icon>
          <Icon>
            <img src={bedIcon} alt="icon de una cama" />
            <p>3</p>
          </Icon>
          <Icon>
            <img src={bathIcon} alt="icon de un baño" />
            <p>2</p>
          </Icon>
        </Icons>
        <Amount>330.000&euro;</Amount>
        <MoreInfo to={DETAILS}>Más Info</MoreInfo>
      </Flex>
    </SC.CardWrapper>
  )
}

export default Card