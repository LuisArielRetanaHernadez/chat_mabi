import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import './search.style.css'
import { useState } from 'react'

const Search = ({ search, setSearch }) => {
  const [value, setValue] = useState('')
  const hanldeSearch = (e) => {
    e.preventDefault()
    setSearch(value)
  }
  return (
    <form className='search' onSubmit={hanldeSearch}>
      <input className='search__input' type="text" placeholder="Search" value={search} onChange={(e) => setValue(e.target.value)} />
      <span className='button search__button'>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </span>
    </form>
  )
}

export default Search