import { mixcloudService } from '../../services/mixcloud-service'
import { storageService } from '../../services/storageService'

export function loadSearchResults(keyword, firstIdx) {
    return async (dispatch) => {
        try {
            if (!keyword || keyword.length === 0) return
            const currSearchRes = (firstIdx !== 0) ? storageService.load('SEARCH_RESULTS') : await mixcloudService.search(keyword)
            const resultsForDisplay = currSearchRes.slice(firstIdx, firstIdx + 6)
            dispatch({ type: 'SET_CURR_SEARCH_RES', currSearchRes: resultsForDisplay }, console.log(resultsForDisplay))
        } catch (err) {
            console.log(err)
        }
    }
}

export function loadRecentSearches() {
    return dispatch => {
        dispatch({ type: 'SET_RECENT_SEARCHES' })
    }
}

export function setSearchTerm(currSearchTerm) {
    return dispatch => {
        dispatch({ type: 'SET_SEARCH_TERM', currSearchTerm })
        // dispatch({ type: 'SET_RECENT_SEARCHES' })
    }
}

export function setCurrTrack(trackId) {
    return async dispatch => {
        const track = await mixcloudService.getById(trackId, 'SEARCH_RESULTS')
        dispatch({ type: 'SET_CURR_TRACK', currChosenTrack: track })
    }
}
