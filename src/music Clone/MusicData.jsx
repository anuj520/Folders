import { Music } from "./Music"
import { FaPlayCircle } from "react-icons/fa";
import { TbPlayerPauseFilled } from "react-icons/tb";
import "./Music.css"
import { useEffect, useRef,useState } from "react";

export const MusicData = ({data}) =>{
   
    
return(
    <div className="Box">
    <h3 className="name">{data.name}</h3>
    <img src={data.img_url} alt={data.img_url} className="imges" />
    <p className="singer">{data.Singer}</p>
    <Buttons/>
    </div>
   
)

}
const Buttons = ({data}) =>{
  const [isPlaying, setIsPlaying] = useState(false);
    
  const audioRef = useRef(new Audio("1.mp3"));
   const handleClick = ()=>{
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      audioRef.current.pause();
      
    } else {
      audioRef.current.play()
      
    }
    };

  {isPlaying ? "Pause" : "Play"}
  return(
    <>
        <FaPlayCircle onClick={handleClick} className={`FaPlayCircle ${isPlaying ? "Pause" : "Play"}`}></FaPlayCircle>
        <TbPlayerPauseFilled onClick={handleClick} className={`FaPlayCircle2 ${!isPlaying ? "Pause" : "Play"}`}>{isPlaying ? "Pause" : "Play"}</TbPlayerPauseFilled>
    </>
  )
}
