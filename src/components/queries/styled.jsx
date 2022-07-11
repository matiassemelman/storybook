import styled from "styled-components";

export const QueryBarContainer = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 70px;
  border-radius: 100px;
`;

export const QueryBarItem = styled.div`
  flex: 1;
  height: 50%;
  padding-left: 4vw;
  border-right: 2px rgba(0, 0, 0, 0.2) solid;
  &:last-child {
    border-right: none;
  }
`;

export const QueryBarLabel = styled.span`
  font-weight: 600;
`;

export const DropDownContainer = styled("div")`
  width: 10.5em;
  margin: 0 auto;
`;

export const DropDownHeader = styled("div")`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: #3faffa;
  background: #ffffff;
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
  &:first-child {
padding-top: 0.8em;
}
`;
