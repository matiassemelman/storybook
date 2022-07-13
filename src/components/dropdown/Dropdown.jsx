import { useState } from "react";
import { DropDownContainer, DropDownHeader, DropDownListContainer, DropDownList, ListItem, ListItemContainer,  ImageContainer, Image, TextContainer, ItemHeader, ItemLocationText  } from "./styled"
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
                  <ListItemContainer>
                    <ImageContainer>
                      <Image src={activity.url} alt="Photo of destination" width="48px" height="48px"/>
                    </ImageContainer>
                    <TextContainer>

                 <ItemHeader>{activity.destination}</ItemHeader>
                 <ItemLocationText>{activity.province} - {activity.country}</ItemLocationText> 

                    </TextContainer>
                  </ListItemContainer>
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
  )
}

export default Dropdown