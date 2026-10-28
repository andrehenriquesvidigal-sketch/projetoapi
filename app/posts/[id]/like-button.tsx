'use client'
import { useState } from "react"
export default function LikeButton(){
    const[liked,  setliked] = useState(false);
    const[likes, setLikes] = useState(0);
    function handleclick(){
        if(liked){
            setliked(false)
            setLikes(likes - 1)
        }else{
            setliked(true)
            setLikes(likes + 1)
        }

    }
    return(
        <div className="flex items-center gap-2">
            <button onClick={handleclick} className="text-3xl cursor-pointer">
                {liked ? "❤️" : "🩶"}
            </button>
            <span className="text-xl">{likes}</span>
        </div>
        
    );
}