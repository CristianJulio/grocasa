import styled from "styled-components";

export const CarouselWrapper = styled.div`
  height: 500px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  width: 100%;

  @media screen and (max-width: 900px) {
    height: 300px;
  }
  
  @media screen and (max-width: 450px) {
    height: 200px;
  }
`