import { Dispatch, SetStateAction } from 'react'
import * as SC from './dots.style'

interface DotsProps {
  page: number,
  setPage: Dispatch<SetStateAction<number>>
}

const Dots = ({ page, setPage }: DotsProps) => {
  return (
    <SC.DotsWrapper>
      <button className={page === 1 ? "active" : ""} onClick={() => setPage(1)}></button>
      <button className={page === 2 ? "active" : ""} onClick={() => setPage(2)}></button>
      <button className={page === 3 ? "active" : ""} onClick={() => setPage(3)}></button>
    </SC.DotsWrapper>
  )
}

export default Dots