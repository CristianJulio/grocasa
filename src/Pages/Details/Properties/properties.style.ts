import { MainContainerStyled } from "../../../Components/MainContainer/mainContainer.style";
import styled from "styled-components";

export const PropertiesWrapper = styled(MainContainerStyled)`
  align-items: center;
  display: flex;
  gap: 60px;
  margin: 15px auto 35px auto;

  @media screen and (max-width: 450px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 30px;
    width: 95%;
  }

  @media screen and (max-width: 900px) {
    width: 95%;
  }
`