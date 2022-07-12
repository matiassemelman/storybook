import styled from "styled-components";


export const DropDownContainer = styled("div")`

`;

export const DropDownHeader = styled("div")`
font-weight: 500;
color: grey;
font-size: 1.1rem;

`;

export const DropDownListContainer = styled("div")``;

export const DropDownList = styled("ul")`
padding: 0;
margin: 0;
padding-left: 1em;
background: #ffffff;
border: 2px solid #e5e5e5;
box-sizing: border-box;
color: #3faffa;
font-size: 1.3rem;
font-weight: 500;
&:first-child {
  padding-top: 0.8em;
}
`;

export const ListItem = styled("li")`
list-style: none;
margin-bottom: 0.8em;
`;
