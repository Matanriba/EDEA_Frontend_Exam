import Axios from 'axios'
import { makeId } from './utilService'
import { storageService } from './storageService'

export const mixcloudService = {
    search,
    getById
}


async function query(keyword) {
    const res = await Axios.get(`https://api.mixcloud.com/search/?q=${keyword}&type=cloudcast`)
    return res.data
}

async function search(keyword) {
    const { data } = await query(keyword)
    const editedResults = data.map(song => {
        return { id: makeId(), songName: song.name, url: song.url, pic: song.pictures.large }
    })
    storageService.store('SEARCH_RESULTS', editedResults)
    _addRecentSearch(keyword)
    return Promise.resolve(editedResults)
}

async function getById(id, storageKey) {
    const searchResults = storageService.load(storageKey)
    const track = searchResults.find(result => result.id === id)
    if (!track) return Promise.reject()
    return Promise.resolve({ ...track })
}

function _addRecentSearch(keyword) {
    const recentSearches = storageService.load('RECENT_SEARCHES') || []
    const duplicateIdx = recentSearches.findIndex(search => search.txt === keyword)
    if (duplicateIdx !== -1) return
    
    const searchToStore = { id: makeId(), txt: keyword }

    if (recentSearches.length < 5) recentSearches.unshift(searchToStore)
    else {
        recentSearches.splice(4, 1)
        recentSearches.unshift(searchToStore)
    }
    storageService.store('RECENT_SEARCHES', recentSearches)
}