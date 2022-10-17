import styled from "styled-components";

export const DotsWrapper = styled.div`
  bottom: 20px;
  display: flex;
  gap: 15px;
  justify-content: center;
  position: absolute;
  width: 100%;

  button {
    background: none;
    border-radius: 50%;
    border: 2px solid var(--clr-white);
    cursor: pointer;
    height: 8px;
    transition: transform .2s;
    width: 8px;

    &.active {
      background-color: var(--clr-white);
    }

    &:hover {
      transform: scale(1.1);
    }
  }
`