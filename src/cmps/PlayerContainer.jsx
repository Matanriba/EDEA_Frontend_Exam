import { useState } from "react"
import ReactPlayer from "react-player"
import { useSelector } from "react-redux"


export const PlayerContainer = () => {

    const { currChosenTrack } = useSelector(state => state.searchModule)
    const [isPlaying, setIsPlaying] = useState(false)

    return (
        <div className="player-container">
            {currChosenTrack !== null && <img src={currChosenTrack.pic} alt="Track image" onClick={() => setIsPlaying(!isPlaying)} />}
            {isPlaying && <ReactPlayer url={currChosenTrack.url} options playing={true} muted={true} />}
        </div>
    )
}