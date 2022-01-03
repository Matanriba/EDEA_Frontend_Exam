import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { storageService } from "../services/storageService"
import { setSearchTerm } from "../store/actions/searchActions"


export const RecentSearches = () => {

    const { currSearchTerm } = useSelector(state => state.searchModule)
    const [recentSearches, setRecentSearches] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        loadRecentSearches()
    }, [currSearchTerm])

    const loadRecentSearches = () => {
        setRecentSearches(storageService.load('RECENT_SEARCHES'))
    }

    const onSetSearchTerm = (searchTerm) => {
        loadRecentSearches()
        dispatch(setSearchTerm(searchTerm))
    }

    return (
        <div className="recent-searches flex column">
            <h1 className="title">Recent Searches</h1>
            {!recentSearches && <p className="initial-text">No recent searches currently...</p>}
            {recentSearches && <div className="recent-list flex column">
                {recentSearches.map(search => <p className="recent-search" key={search.id} onClick={() => onSetSearchTerm(search.txt)}>{search.txt}</p>)}
                               </div>}
        </div>
    )
}