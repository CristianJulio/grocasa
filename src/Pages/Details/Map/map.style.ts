import styled from "styled-components";

export const MapStyled = styled.img`
  display: flex;
  margin: 0 auto 20px auto;
  object-fit: cover;
  width: 850px;

  @media screen and (max-width: 900px) {
    width: 95%;
  }
`