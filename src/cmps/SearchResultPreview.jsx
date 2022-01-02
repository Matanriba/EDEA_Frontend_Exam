

export const ResultPreview = ({result, setCurrTrack}) => {

    const onSetCurrTrack = () => {
        setCurrTrack(result.id)
    }

    return (
        <p key={result.id} onClick={() => onSetCurrTrack()}>{result.songName.substring(0, 50) + '...'}</p>
    )
}