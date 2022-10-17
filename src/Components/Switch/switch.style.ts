import styled from "styled-components";

export const SwitchWrapepr = styled.button`
  background-color: var(--clr-light-grey);
  border-radius: 30px;
  border: 2px solid var(--clr-light-grey);
  cursor: pointer;
  height: 34px;
  position: relative;
  transition: all .3s;
  width: 60px;

  ::after {
    content: '';
    background-color: var(--clr-white);
    border-radius: 50%;
    height: 26px;
    left: 2px;
    position: absolute;
    top: 2px;
    transition: all .3s;
    width: 26px;
  }

  &.active {
    background-color: var(--clr-orange);   
    border: 2px solid var(--clr-orange);
    
    ::after {
      left: 28px;
    }
  }
`