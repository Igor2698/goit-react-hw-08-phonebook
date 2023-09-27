import { styled } from "styled-components"

export const ContContactList = styled.div`
background-color: #111;
padding: 20px;
border-radius: 10px;
box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.6);`


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









