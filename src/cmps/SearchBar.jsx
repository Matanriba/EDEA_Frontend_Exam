import { useState } from 'react'

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
            <form className='search-form' onSubmit={(ev) => onChangeSearchTerm(ev, searchTxt)}>
                <input type="text" value={searchTxt} name='searchTxt' onChange={handleChange} />
                <button>🏁</button>
            </form>
        </>
    )
}