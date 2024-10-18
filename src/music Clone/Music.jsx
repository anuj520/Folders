import { MusicData } from "./MusicData"
import  ApiData from "/public/Music.json"
export const Music = () => {
   return(
   <>
   <h1>Playlist</h1>
   <div className="serch">
   <input type="text" placeholder="serch"/>
   </div>
     <div className="Box2">
      {ApiData.map((item)=>{
    return  <MusicData  key={item.id} data={item}/>
      })}
     </div>
   </>
   )
}