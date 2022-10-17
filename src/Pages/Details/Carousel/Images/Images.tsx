import * as SC from './images.style'
import firstImg from '../../../../assets/Rectangle-1@2x.png'
import secondImg from '../../../../assets/Rectangle-2@2x.png'
import thirdImg from '../../../../assets/Rectangle-3@2x.png'

interface ImagesProps {
  page: number
}

const Images = ({ page }: ImagesProps) => {
  return (
    <SC.ImagesWrapper
      className={page === 1 ? "first" : page === 2 ? "second" : "third"}
    >
      <img src={firstImg} alt="" />
      <img src={secondImg} alt="" />
      <img src={thirdImg} alt="" />
    </SC.ImagesWrapper>
  )
}

export default Images