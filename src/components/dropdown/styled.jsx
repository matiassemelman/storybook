import styled from "styled-components";

export const DropDownContainer = styled("div")``;

export const DropDownHeader = styled("div")`
  font-weight: 500;
  color: grey;
  font-size: 1.1rem;
`;

export const DropDownListContainer = styled("div")`
  position: absolute;
  left: 20px;
  top: 100px;
  width: 450px;
`;

export const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  border-radius: 30px;
  box-shadow: 2px 2px 15px 4px rgba(0,0,0,0.1);
  box-sizing: border-box;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;
export const ListItem = styled("li")`
  list-style: none;
`;


export const ListItemContainer = styled('div')`
  display: flex;
  padding: 1em 1em 1em;
  
  
`

export const ImageContainer = styled('div')`
margin-right: 1em;
`;

export const Image = styled('img')`
border-radius: 10px;
`
export const TextContainer = styled('div')`
`

export const ItemHeader = styled('h5')`
margin-top: 0.3em;
margin-bottom: 0;
font-size: 1.03em;
`
export const ItemLocationText = styled('small')`
color: hsl(10, 0%, 30%);
font-size: 0.94em
`