import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import './search.style.css'

const Search = ({ search, setSearch }) => {
  return (
    <div className='search'>
      <input className='search__input' type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
      <span className='button search__button'>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </span>
    </div>
  )
}

export default Search