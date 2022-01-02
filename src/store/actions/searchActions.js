import { mixcloudService } from '../../services/mixcloud-service'

export function loadSearches(keyword) {
    return async (dispatch) => {
        try {
            if (!keyword || keyword.length === 0) return
            const currSearchRes = await mixcloudService.search(keyword)
            dispatch({ type: 'SET_CURR_SEARCH_RES', currSearchRes })
        } catch (err) {
            console.log(err)
        }
    }
}

export function setSearchTerm(currSearchTerm) {
    return dispatch => {
        dispatch({ type: 'SET_SEARCH_TERM', currSearchTerm })
    }
}

export function setCurrTrack(trackId) {
    return async dispatch => {
        const track = await mixcloudService.getById(trackId)
        dispatch({ type: 'SET_CURR_TRACK', currChosenTrack: track })
    }
}
