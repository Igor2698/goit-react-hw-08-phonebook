import { Form, Field, ErrorMessage } from 'formik';
import styled, { keyframes } from 'styled-components'

const blinkingAnimation = keyframes`
  0% { color: rgb(0, 255, 200);; }
  50% { color: white; }
  100% { color: rgb(0, 255, 200);; }
`;



export const StyledForm = styled(Form)`
padding: 50px;
margin: 0 auto;
display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  background: transparent;
    border: 2px solid rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(15px);
    border-radius: 20px;
    width: 50%;
    
    justify-content: center;
}
`;

export const StyledField = styled(Field)`
padding: 10px 10px 0 10px;
font-size: 16px;
color: white;
appearance: none;


transition: border-color 0.3s ease;
width: 400px;
height: 55px;
background: rgba(0, 0, 0, 0.15);
box-shadow: rgba(0, 0, 0, 0.3) 0px -1px 0px inset;
transition: all 0.15s ease 0s;


@media screen and (max-width: 768px) {
     
      width: 250px;
    
  }

  &:focus {
    
    outline: none;
    outline-offset: -2px; /* Отрицательный отступ сверху для скрытия верхнего outline */
    box-shadow: rgb(42, 157, 143) 0px -2px 0px inset;
  }






`;

export const Label = styled.label`
position: absolute;
top: 22px;
left: 10px;
transition: transform 0.3s, font-size 0.3s, color 0.3s;
pointer-events: none;
color: white;
z-index: 1;
background: transparent;




${StyledField}:focus + &, 
${StyledField}:not(:placeholder-shown) + & {
 

  background: transparent;
  transform: scale(0.8) translateY(-130%) translateX(-18%);
 
 
  

  font-size: 18px;
  color: rgb(0, 255, 200);
}



`;

export const ErrorMsg = styled(ErrorMessage)`

  font-size: 14px;
  animation: ${blinkingAnimation} 1s linear infinite;
  margin-top: 10px;
  
  pointer-events: none;
`;

export const InputContainer = styled.div`
position: relative;
`


export const ButtonForm = styled.button`
    font-size: 25px;
    padding: 10px 15px;
    background-color: #00ff00;
    color: white;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
    width: 320px;

    @media screen and (max-width: 768px) {
     
      font-size: 18px;
      width: 150px;
    
  }


    &:active {
        background-color: black;
    }


    `

