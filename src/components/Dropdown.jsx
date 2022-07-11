import { DropDownContainer, DropDownHeader, DropDownListContainer, DropDownList, ListItem } from "./queries/styled"

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    
  return (
    <DropDownContainer>
        <DropDownHeader>Mangoes</DropDownHeader>
        <DropDownListContainer>
          <DropDownList>
            <ListItem>Mangoes</ListItem>
            <ListItem>Apples</ListItem>
            <ListItem>Oranges</ListItem>
          </DropDownList>
        </DropDownListContainer>
      </DropDownContainer>
  )
}

export default Dropdown