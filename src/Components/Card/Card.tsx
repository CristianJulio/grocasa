import * as SC from './card.style'
import bathIcon from '../../assets/WEB_MATERIAL-09.svg'
import bedIcon from '../../assets/WEB_MATERIAL-10.svg'
import crossIcon from '../../assets/WEB_MATERIAL-11.svg'
import MainImg from '../../assets/Rectangle -1@2x.png'

const Card = () => {
  return (
    <SC.CardWrapper>
      <SC.MainImg src={MainImg} alt="" />
      <SC.Title>Ático Dúplex de Obra Nueva</SC.Title>
      <SC.Location>Mariano, Sant Boi de Llobregat</SC.Location>
      <SC.FlexWrapper>
        <SC.Icons>
          <SC.IconWrapper>
            <img src={crossIcon} alt="icono de una cruz" />
            <p>102m^</p>
          </SC.IconWrapper>
          <SC.IconWrapper>
            <img src={bedIcon} alt="icon de una cama" />
            <p>3</p>
          </SC.IconWrapper>
          <SC.IconWrapper>
            <img src={bathIcon} alt="icon de un baño" />
            <p>2</p>
          </SC.IconWrapper>
        </SC.Icons>
        <SC.Amount>330.000&euro;</SC.Amount>
        <SC.MoreInfoButton>Más Info</SC.MoreInfoButton>
      </SC.FlexWrapper>
    </SC.CardWrapper>
  )
}

export default Card