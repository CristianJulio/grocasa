import * as SC from './properties.style'
import PropertiesContainer from '../../../Components/PropertiesContainer/PropertiesContainer'

const Properties = () => {
  return (
    <SC.PropertiesWrapper>
      <PropertiesContainer>
        <h4>Características</h4>
        <ul>
          <li>Ático102 m2 (construidos)</li>
          <li>3 Habitaciones</li>
          <li>Segunda mani100 m2 (Útiles)</li>
          <li>Reformado</li>
          <li>2 Baños</li>
        </ul>
      </PropertiesContainer>

      <PropertiesContainer>
        <h4>Extras</h4>
        <ul>
          <li>Terraza</li>
          <li>Balcón</li>
          <li>Ascensor</li>
          <li>Calefacción</li>
          <li>Aire acondicionado</li>
        </ul>
      </PropertiesContainer>
    </SC.PropertiesWrapper>
  )
}

export default Properties