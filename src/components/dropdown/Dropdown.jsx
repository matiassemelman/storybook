import SelectSearch from 'react-select-search';
import Fuse from 'fuse.js'

import activities from '../../db/activities.json'

const Dropdown = () => {
    
  const options = {
    includeScore: true,
    // Search in `author` and in `tags` array
    keys: ['province', 'country']
  }

  const fuse = new Fuse(activities, {
    keys: ['province', 'country'],
    valueKey: "province"
  })


  return (

<SelectSearch options={activities}  autoFocus autoComplete="on" placeholder="¿A dónde vas?" search />
    
  )
}

export default Dropdown