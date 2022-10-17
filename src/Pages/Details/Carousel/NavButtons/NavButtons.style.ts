import styled from "styled-components";

export const NavButtonStyled = styled.button`
  background: none;
  border: none;
  color: var(--clr-white);
  cursor: pointer;
  font-size: 80px;
  position: absolute;
  top: 35%;
  width: 20px;
  z-index: 100;

  :first-of-type {
    left: 30px;
  }

  :last-of-type {
    right: 90px;
  }

  @media screen and (max-width: 450px) {
    font-size: 40px;

    :first-of-type {
      left: 15px;
    }

    :last-of-type {
      right: 30px;
    }
  }
`