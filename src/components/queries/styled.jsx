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
