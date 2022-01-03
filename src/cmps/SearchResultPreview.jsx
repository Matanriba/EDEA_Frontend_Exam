

export const ResultPreview = ({ result, setCurrTrack, isTile }) => {

    const onSetCurrTrack = () => {
        setCurrTrack(result.id)
    }

    return (
        <>
            {(!isTile) && <p className="result-preview" key={result.id} onClick={() => onSetCurrTrack()}>{(result.songName.length > 50) ? result.songName.substring(0, 50) + '...' : result.songName}</p>}
            {(isTile) && <img className="result-preview" src={result.pic} onClick={() => onSetCurrTrack()}/>}
        </>

    )
}