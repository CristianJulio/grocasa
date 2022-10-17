import { Link } from "react-router-dom";
import styled from "styled-components";

export const BackWrapper = styled(Link)`
  display: inline-block;
  height: 28px;
  left: -70px;
  position: absolute;
  top: 21%;
  transition: transform .2s;

  &:hover {
    transform: scale(1.1);
  }
  
  img {
    width: 28px;
  }
`