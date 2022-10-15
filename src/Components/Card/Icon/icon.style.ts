import styled from "styled-components";

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  & > img {
    height: 30px;
    margin-bottom: -5px;
    width: 30px;
  }

  & > p {
    color: var(--clr-text);
    font-size: var(--fs-small);
    font-weight: var(--fw-semibold);
    text-align: center;
  }
  
  &:first-of-type {
    img {
      align-self: start;
    }
  }
`