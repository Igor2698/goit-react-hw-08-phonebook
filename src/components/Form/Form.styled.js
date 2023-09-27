import { Form, Field, ErrorMessage } from 'formik';
import styled, { keyframes } from 'styled-components'

const blinkingAnimation = keyframes`
  0% { color: #19a911; }
  50% { color: white; }
  100% { color: #19a911; }
`;



export const StyledForm = styled(Form)`
display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
`;

export const StyledField = styled(Field)`
padding: 10px;
border: 1px solid #00ff00;
border-radius: 5px;
transition: border-color 0.3s ease;
width: 400px;


@media screen and (max-width: 768px) {
     
      width: 250px;
    
  }

  &:focus {
    border-color: #00ff00; 
  }

`;

export const Label = styled.label`
position: absolute;
top: 10px;
left: 10px;
transition: transform 0.3s, font-size 0.3s, color 0.3s;
pointer-events: none;
color: #666;




${StyledField}:focus + &, 
${StyledField}:not(:placeholder-shown) + & {
  transform: translateY(-180%);
  font-size: 16px;
  color: #19a911;
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

