import * as SC from './icon.style'

interface IconProps {
  children: JSX.Element | JSX.Element[]
}

const Icon = ({ children }: IconProps) => {
  return (
    <SC.IconWrapper>
      {children}
    </SC.IconWrapper>
  )
}

export default Icon