import React from "react"
import { ResultPreview } from "./SearchResultPreview"


const _SearchResultList = ({ results, setCurrTrack }) => {

    return (
        <div className="search-result-list">
            {results.map(result => <ResultPreview key={result.id} result={result} setCurrTrack={setCurrTrack}/>)}
        </div>
    )
}

export const SearchResultList = React.memo(_SearchResultList)