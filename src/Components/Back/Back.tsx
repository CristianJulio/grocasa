import * as SC from './back.style'
import { arrowIcon } from '../../assets/icons/icons'

interface BackProps {
  to: string
}

const Back = ({ to }: BackProps) => {
  return (
    <SC.BackWrapper to={to}>
      <img src={arrowIcon} alt="" />
    </SC.BackWrapper>
  )
}

export default Back