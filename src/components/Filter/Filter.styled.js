import { styled } from "styled-components"

export const CenterContainer = styled.div`

display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-top: 40px;`

export const FilterTitile = styled.h2`text-align: center;
margin-bottom: 35px;`

export const ContFilter = styled.div` position: relative;
margin-bottom: 15px;`

export const FilterPlaceholder = styled.label` position: absolute;
top: 10px;
left: 5px;
display: flex;
flex-direction: column;
margin-bottom: 10px;
gap: 15px;
font-size: 16px;
color: white;
text-align: center;
transition: transform 0.3s, font-size 0.3s, color 0.3s;
pointer-events: none;`





export const FilterInput = styled.input`height: 30px;
border-radius:10px;
color: white;
background: rgba(0, 0, 0, 0.15);
padding: 5px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px -1px 0px inset;

@media screen and (min-width: 768px) {
    & {
      width: 500px;
    }
  }

&:focus + ${FilterPlaceholder}, &:not(:placeholder-shown) + ${FilterPlaceholder}{
    transform: translateY(-160%);
    font-size: 16px;
    color: rgb(0, 255, 200);;
}

font-size: 18px;`


