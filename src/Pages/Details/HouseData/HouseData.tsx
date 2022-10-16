import { bedIcon, crossIcon, bathIcon } from '../../../assets/icons/icons'
import * as SC from './houseData.style'
import Icon from '../../../Components/Card/Icon/Icon'
import Icons from '../../../Components/Card/Icons/Icons'
import Location from '../../../Components/Card/Location/Location'
import Title from '../../../Components/Card/Title/Title'
import Flex from '../../../Components/Flex/Flex'
import Amount from '../../../Components/Card/Amount/Amount'

const HouseData = () => {
  return (
    <SC.HouseDataWrapper>
      <Title>Ático Dúplex de Obra Nueva</Title>
      <Location>Mariano, Sant Boi de Llobregat</Location>
      <SC.Description>Dúplex de obra seminueva en Marianao. Finca del 2019. El piso consta de una planta con entrada al salón y final en terraza. El salón da entrada a la cocina y al pasillo que distribuye una de las habitaciones dobles y uno de los cuartos. de baño de tres piezas.. Dúplex de obra seminueva en Marianao. Finca del 2019. El piso consta de una planta con entrada al salón y final en terraza. El salón da entrada a la cocina y al pasillo que distribuye una de las habitaciones dobles y uno de los cuartos. de baño de tres piezas.. Dúplex de obra seminueva en Marianao. Finca del 2019. El piso consta de una planta con entrada al salón y final en terraza. El salón da entrada a la cocina y al pasillo que distribuye una de las habitaciones dobles y uno de los cuartos. de baño de tres piezas..</SC.Description>
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
        <SC.InnerFlex>
          <Amount color='var(--clr-orange)'>330.000&euro;</Amount>
          <p>Heard</p>
        </SC.InnerFlex>
      </Flex>
    </SC.HouseDataWrapper>
  )
}

export default HouseData