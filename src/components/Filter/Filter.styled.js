import { styled } from "styled-components"

export const CenterContainer = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;`

export const FilterTitile = styled.h2`text-align: center;
margin-bottom: 35px;`

export const ContFilter = styled.div` position: relative;
margin-bottom: 15px;`

export const FilterPlaceholder = styled.label` position: absolute;
top: 5px;
left: 5px;
display: flex;
flex-direction: column;
margin-bottom: 10px;
gap: 15px;
font-size: 16px;
color: #666;
text-align: center;
transition: transform 0.3s, font-size 0.3s, color 0.3s;
pointer-events: none;`





export const FilterInput = styled.input`height: 30px;
border-radius:10px;

@media screen and (min-width: 768px) {
    & {
      width: 500px;
    }
  }

&:focus + ${FilterPlaceholder}, &:not(:placeholder-shown) + ${FilterPlaceholder}{
    transform: translateY(-140%);
    font-size: 16px;
    color: #19a911;
}

font-size: 18px;`


