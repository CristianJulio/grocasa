import { useState } from 'react'
import * as SC from './carousel.style'
import Dots from './Dots/Dots'
import Images from './Images/Images'
import NavButtons from './NavButtons/NavButtons'

const Carousel = () => {
  const [page, setPage] = useState<number>(1)

  return (
    <SC.CarouselWrapper>
      <NavButtons page={page} setPage={setPage} />
      <Images page={page} />
      <Dots page={page} setPage={setPage} />
    </SC.CarouselWrapper>
  )
}

export default Carousel