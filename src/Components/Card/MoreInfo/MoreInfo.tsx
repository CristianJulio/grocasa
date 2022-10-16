import * as SC from './moreInfo.style'

interface MoreInfoProps {
  to: string;
  children: string;
}

const MoreInfo = ({ to, children }: MoreInfoProps) => {
  return (
    <SC.MoreInfoStyled to={to}>{children}</SC.MoreInfoStyled>
  )
}

export default MoreInfo