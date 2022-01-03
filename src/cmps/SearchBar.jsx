import { useState } from 'react'
import {BiSearchAlt} from 'react-icons/bi'

export const SearchBar = ({ onChangeSearchTerm }) => {

    const [searchTerm, setSearchTerm] = useState({ searchTxt: '' })

    const handleChange = ({ target }) => {
        var field = target.name
        var value = target.type === 'number' ? +target.value : target.value
        setSearchTerm(searchTerm => ({ ...searchTerm, [field]: value }))
    }

    const { searchTxt } = searchTerm
    return (
        <>
            <form className='search-form flex' onSubmit={(ev) => onChangeSearchTerm(ev, searchTxt)}>
                <input type="text" value={searchTxt} name='searchTxt' onChange={handleChange} placeholder='Search Mixcloud...' autoFocus/>
                <button className='simple-button'><BiSearchAlt /></button>
            </form>
        </>
    )
}