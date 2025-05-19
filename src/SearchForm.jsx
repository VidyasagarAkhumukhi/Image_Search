import React from 'react'
import { useGlobalContext } from './context'


const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const handleSubmit = (e) => {
    e.preventDefault()
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    setSearchTerm(searchValue)
  }
  return (
    <section>
      <h1 className='title'> Image Engine </h1>
      <form action="" className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className='form-input search-input'
          name='search'
          placeholder='SF90' />
        <button type='submit' className="btn">Search</button>
      </form>

    </section>
  )
}

export default SearchForm