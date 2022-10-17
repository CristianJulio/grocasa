import styled from "styled-components";

export const ImagesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 100%);
  
  img {
    height: 100%;
    object-fit: cover;
    position: absolute;
    transition: all .5s;
    width: 100%;
  }


  &.first {
    img {
      :first-child {
        left: 0vw;
      }

      :nth-of-type(2) {
        left: 100vw;
      }
      
      :last-child {
        left: 200vw;
      }  
    }
  }

  &.second {
    img {
      :first-child {
        left: -100vw;
      }

      :nth-of-type(2) {
        left: 0vw;
      }
        
      :last-child {
        left: 100vw;
      }  
    }
  }

  &.third {
    img {
      :first-child {
        left: -200vw;
      }

      :nth-of-type(2) {
        left: -100vw;
      }
        
      :last-child {
        left: 0vw;
      }  
    }
  }
`