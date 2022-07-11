import { useState } from "react";
import { QueryBarContainer, QueryBarItem, QueryBarLabel } from "./styled";
import Dropdown from './../Dropdown';

const BookQueries = ({ text, className, onClick }) => {
  const [destination, setDestination] = useState('¿A dónde vas?')
  return (
    <QueryBarContainer>
      <QueryBarItem>
        <QueryBarLabel>Lugar</QueryBarLabel>
       {/* <Dropdown/> */}

      </QueryBarItem>
      <QueryBarItem>
        <QueryBarLabel>Fecha llegada</QueryBarLabel>
      </QueryBarItem>
      <QueryBarItem>
        <QueryBarLabel>Fecha Partida</QueryBarLabel>
      </QueryBarItem>

      <QueryBarItem></QueryBarItem>
    </QueryBarContainer>
  );
};

export default BookQueries;
