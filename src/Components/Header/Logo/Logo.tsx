import * as SC from './logo.style'

interface LogoProps {
  src: string,
  alt?: string
}

const Logo = ({ src, alt }: LogoProps) => {
  return (
    <SC.Logo src={src} alt={alt} />
  )
}

export default Logo