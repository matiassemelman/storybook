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

  background: #ffffff;
  box-shadow: 2px 2px 15px 4px rgba(0,0,0,0.1);
  box-sizing: border-box;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

export const ListItemContainer = styled('div')`
  display: flex;
  padding-top: 1em;
  padding-left: 1em;
  
`

export const ImageContainer = styled('div')`
`;

export const Image = styled('img')`
border-radius: 10px;
`

export const ListItem = styled("li")`
  list-style: none;
`;
