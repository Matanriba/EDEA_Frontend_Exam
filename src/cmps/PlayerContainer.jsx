import { useEffect, useState } from "react"
import ReactPlayer from "react-player"
import { useSelector } from "react-redux"


export const PlayerContainer = () => {

    const { currChosenTrack } = useSelector(state => state.searchModule)
    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(() => {
        setIsPlaying(false)
    }, [currChosenTrack])

    return (
        <div className="player-container">
            {!currChosenTrack && <div className="instructions">
                <p>1. Search anything and pick a track</p>
                <p>2. Click on the central image</p>
                <p>3. Hit "Play" button on player</p>
                <p>4. Have fun! 😎</p>
            </div> }
            {currChosenTrack  && <img className={`track-image ${(isPlaying) ? "playing" : ""}`} src={currChosenTrack.pic} alt="Track" onClick={() => setIsPlaying(!isPlaying)} />}
            {(isPlaying && currChosenTrack) && <ReactPlayer className="player" 
            url={currChosenTrack.url} width='100%' height='30%' />}
        </div>
    )
}