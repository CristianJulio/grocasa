import * as SC from './Location.style'

interface LocationProps {
  children: string
}

const Location = ({ children }: LocationProps) => {
  return (
    <SC.Location>{children}</SC.Location>
  )
}

export default Location