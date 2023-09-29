import styled, { css } from 'styled-components';


export const ContContactList = styled.div`

padding: 20px;
border-radius: 10px;
box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.6);
backdrop-filter: blur(15px);`


export const ContListUl = styled.ul`  list-style: none;
 padding: 0;`

export const ContListItem = styled.li`
margin-bottom: 15px;
padding: 10px 25px;
border: 1px solid #444;
border-radius: 5px;
display: flex;
justify-content: space-between;
align-items: center;
gap: 15px;

${(props) =>
    props.modalOpen &&
    css`
    opacity: 0.4;
    pointer-events: none;
  `}


`


export const ContListText = styled.p`    
color: #fff;
font-size: 18px;

span.number {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

margin: 0;
@media screen and (max-width: 768px) {
    font-size: 14px;}

`


export const ContListBtn = styled.button`



   display: flex;


     background: rgb(0, 255, 200);
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
    border-radius: 40px;
  
    border: none;
    outline: none;
    cursor: pointer;
    transition: background 500ms ease-in-out 0s, color 250ms ease-in-out 0s;
  
  &:hover {
    color: white;
    background: rgb(209, 36, 47);
  }

`





export const NoContactsText = styled.p`

border: 2px solid rgba(255, 255, 255, 0.5);
backdrop-filter: blur(15px);
width: 30%;
padding: 10px;
border-radius: 15px;
text-align: center;
margin: 0 auto;
color: rgb(0, 255, 200);

`


export const NoFilteredText = styled.p`
color: rgb(0, 255, 200);

border: 2px solid rgba(255, 255, 255, 0.5);
backdrop-filter: blur(15px);
width: 30%;
padding: 10px;
border-radius: 15px;
text-align: center;
margin: 0 auto;

`


export const SvgContainer = styled.div`
display: flex;
gap: 15px;
`

const additionalStyles = `
transition: all 500ms ease;

&:hover {
  color: black;
  background: yellow;
}
`;



export const EditButton = styled(ContListBtn)`
${additionalStyles}


`

const stylesItem = `
background-color: black;
`


export const EdditItem = styled(ContListItem)`
${stylesItem}
`





