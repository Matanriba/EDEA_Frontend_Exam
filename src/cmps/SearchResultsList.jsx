import React from "react"
import { ResultPreview } from "./SearchResultPreview"


const _SearchResultList = ({ results, setCurrTrack, isTile }) => {

    return (
        <div className={`search-result-list flex ${(!isTile) ? "column" : ""}`}>
            {results.map(result => <ResultPreview key={result.id} result={result} setCurrTrack={setCurrTrack} isTile={isTile} />)}
        </div>
    )
}

export const SearchResultList = React.memo(_SearchResultList)