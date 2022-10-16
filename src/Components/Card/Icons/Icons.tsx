import * as SC from './icons.style'

interface IconsProps {
  children: JSX.Element | JSX.Element[]
}

const Icons = ({ children }: IconsProps) => {
  return (
    <SC.IconsWrapper>{children}</SC.IconsWrapper>
  )
}

export default Icons