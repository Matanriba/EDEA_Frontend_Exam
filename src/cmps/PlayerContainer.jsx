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
            {currChosenTrack  && <img className={`track-image ${(isPlaying) ? "playing" : ""}`} src={currChosenTrack.pic} onClick={() => setIsPlaying(!isPlaying)} />}
            {(isPlaying && currChosenTrack) && <ReactPlayer className="player" 
            url={currChosenTrack.url} options='true' playing='true' width='100%' height='30%' />}
        </div>
    )
}