import { Dispatch, SetStateAction } from 'react'
import * as SC from './switch.style'

interface SwitchProps {
  status: boolean,
  setStatus: Dispatch<SetStateAction<boolean>>
}

const Switch = ({ status, setStatus }: SwitchProps) => {
  return (
    <SC.SwitchWrapepr
      onClick={() => setStatus(!status)}
      className={status ? "active" : ""}
    />
  )
}

export default Switch