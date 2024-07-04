import './search.style.css'

const Search = ({ search, setSearch }) => {
  return (
    <div>
      <input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
    </div>
  )
}

export default Search