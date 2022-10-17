import { Dispatch, SetStateAction } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import * as SC from './NavButtons.style'

interface NavButtonsProps {
  page: number,
  setPage: Dispatch<SetStateAction<number>>
}

const NavButtons = ({ page, setPage }: NavButtonsProps) => {
  return (
    <>
      <SC.NavButtonStyled onClick={() => setPage(page <= 1 ? 3 : page - 1)}><IoIosArrowBack /></SC.NavButtonStyled>
      <SC.NavButtonStyled onClick={() => setPage(page >= 3 ? 1 : page + 1)}><IoIosArrowForward /></SC.NavButtonStyled>
    </>
  )
}

export default NavButtons