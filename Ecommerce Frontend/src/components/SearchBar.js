import React from 'react'
import { Search } from 'react-bootstrap-icons'

const SearchBar = () => {
  return (
    <div className='position-relative'>
      <input type="text" className='search_bar px-3' placeholder='Search..' />
      <Search className='search_icon'/>
    </div>
  )
}

export default SearchBar
