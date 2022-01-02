import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { loadSearches, setSearchTerm, setCurrTrack } from '../store/actions/searchActions'
import { SearchBar } from './SearchBar'
import { SearchResultList } from './SearchResultsList'

export const SearchContainer = () => {

    const { currSearchRes, currSearchTerm } = useSelector(state => state.searchModule)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadSearches(currSearchTerm))
    }, [currSearchTerm])

    const onChangeSearchTerm = (ev, searchTerm) => {
        ev.preventDefault()
        dispatch(setSearchTerm(searchTerm))
    }

    const onSetCurrTrack = (trackId) => {
        dispatch(setCurrTrack(trackId))
    }

    return (
        <div className="search-container">
            <SearchBar onChangeSearchTerm={onChangeSearchTerm} />
            <SearchResultList results={currSearchRes} setCurrTrack={onSetCurrTrack} />
        </div>
    )
}