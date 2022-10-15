import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 100%;
`
export const MainImg = styled.img`
  width: 100%;
  height: 130px;
`
export const Title = styled.h2`
  color: #F76A23;
  font-size: 1rem;
  font-weight: 600;
`
export const Location = styled.p`
  color: #ACACAC;
  font-size: .85rem;
`
export const FlexWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`
export const Icons = styled.div`
  display: flex;
  align-items: center;
`
export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  & > img {
    width: 30px;
    height: 30px;
    margin-bottom: -5px;
  }

  & > p {
    text-align: center;
    color: #686868;
    font-weight: 600;
    font-size: .6rem;
  }
  
  &:first-of-type {
    img {
      align-self: start;
    }
  }
`
export const Amount = styled.span`
  color: #686868;
  font-size: 20px;
  font-weight: 600;
  align-self: center;
`
export const MoreInfoButton = styled.button`
  background-color: #fff;
  border-radius: 20px;
  border: 1px solid #F76A23;
  color: #F76A23;
  cursor: pointer;
  font-weight: 600;
  padding: 5px 30px;
  transition: all .2s;

  &:hover {
    background-color: #F76A23;
    color: #fff;
  }
`