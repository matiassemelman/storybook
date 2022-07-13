import { useState } from "react";
import { DropDownContainer, DropDownHeader, DropDownListContainer, DropDownList, ListItem } from "./styled"
import activities from '../../db/activities.json'

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('¿A dónde vas?');

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };
    
  return (
    <DropDownContainer>
        <DropDownHeader onClick={toggling}>
          {selectedOption || "Cargando..."}
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {activities.map(activity => (
                <ListItem onClick={onOptionClicked(activity.destination)} key={Math.random()}>
               
                 <h5>{activity.destination}</h5> 
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
  )
}

export default Dropdown