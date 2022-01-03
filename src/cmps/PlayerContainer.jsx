import { useEffect, useState } from "react"
import ReactPlayer from "react-player"
import { useSelector } from "react-redux"


export const PlayerContainer = () => {

    const { currChosenTrack } = useSelector(state => state.searchModule)
    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(() => {
        setIsPlaying(false)
    }, [])

    return (
        <div className="player-container">
            {currChosenTrack !== null && <img className={`track-image ${(isPlaying) ? "playing" : ""}`} src={currChosenTrack.pic} onClick={() => setIsPlaying(!isPlaying)} />}
            {isPlaying && <ReactPlayer className="player" 
            url={currChosenTrack.url} options playing={true} width='100%' height='30%' />}
        </div>
    )
}