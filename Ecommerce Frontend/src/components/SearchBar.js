import React from 'react'
import { Search } from 'react-bootstrap-icons'

const SearchBar = () => {
  return (
    <div className='position-relative'>
      <input type="text" className='search_bar ps-3 pe-5' placeholder='Search..' />
      <Search className='search_icon'/>
    </div>
  )
}

export default SearchBar
