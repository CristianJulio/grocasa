import * as SC from './title.style'

interface TitleProps {
  children: string
}

const Title = ({ children }: TitleProps) => {
  return (
    <SC.TitleStyled>{children}</SC.TitleStyled>
  )
}

export default Title