import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { loadSearchResults, setSearchTerm, setCurrTrack } from '../store/actions/searchActions'
import { SearchBar } from './SearchBar'
import { SearchResultList } from './SearchResultsList'
import { GrLinkNext } from 'react-icons/gr'
import { FaList } from 'react-icons/fa'
import { BsFillGridFill } from 'react-icons/bs'

export const SearchContainer = () => {

    const { currSearchRes, currSearchTerm } = useSelector(state => state.searchModule)
    const [firstIdx, setFirstIdx] = useState(0)
    const [isTile, setIsTile] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadSearchResults(currSearchTerm, firstIdx))
    }, [currSearchTerm, firstIdx])

    const onChangeSearchTerm = (ev, searchTerm) => {
        ev.preventDefault()
        setFirstIdx(0)
        dispatch(setSearchTerm(searchTerm))
    }

    const onSetCurrTrack = (trackId) => {
        dispatch(setCurrTrack(trackId))
    }

    const nextPage = (Idx) => {
        if (Idx >= 17) setFirstIdx(0)
        else setFirstIdx(Idx + 6)
    }

    const setTileMode = (isTileMode) => {
        setIsTile(isTileMode)
    }

    return (
        <div className="search-container flex column space-between">
            <SearchBar onChangeSearchTerm={onChangeSearchTerm} />
            <SearchResultList results={currSearchRes} setCurrTrack={onSetCurrTrack} isTile={isTile} />
            <div className="actions-btns flex space-between">
                <div className="left-btn">
                    <button className='simple-button' onClick={() => nextPage(firstIdx)}><GrLinkNext /></button>
                </div>
                <div className="right-btns flex">
                    <button className='simple-button' onClick={() => setTileMode(false)}><FaList /></button>
                    <button className='simple-button' onClick={() => setTileMode(true)}><BsFillGridFill /></button>
                </div>
            </div>
        </div>
    )
}