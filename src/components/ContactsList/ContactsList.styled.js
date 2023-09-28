import { styled } from "styled-components"

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
gap: 15px;`


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


export const ContListBtn = styled.button`font-size: 18px;
background-color: #00ff00;
color: #111;
border: none;
padding: 5px;
border-radius: 15px;
cursor: pointer;
transition: background-color 0.3s ease, color 0.3s ease;
max-width: 80px;
&:active{color: #fff;}

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









