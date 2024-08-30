import React, { useState } from "react"
import {FaStar} from "react-icons/fa"
import "./style.css"

export default function StarRating({noOfComponent = 5}){
    const [currentIndex,setCurrentIndex] = useState("");
    const [CurrentHover,setCurrentHover] = useState("");

    function handleOnCLick(getIndex){
        setCurrentIndex(getIndex);
        console.log(`clicked ${currentIndex}`);
        
    }

    function handleMouseLeave(){
        setCurrentIndex(currentIndex);
        setCurrentHover("");
        console.log(`Leave ${currentIndex}`);
    }

    function handleMouseHover(getIndex){
        setCurrentHover(getIndex);
        console.log(`Hover ${CurrentHover}`);
    }


    return(
        <div className="star">
            <h1 className="Heading">Give a Rating (=^.^=)</h1>
            {
                [...Array(noOfComponent)].map((_, index)=>{index += 1;

                    return(
                        <FaStar key={index}
                        className={index <= (CurrentHover || currentIndex) ? "active" : "NotActive"}
                        onClick={()=>handleOnCLick(index)}
                        onMouseLeave={()=>handleMouseLeave()}
                        onMouseMove={()=>handleMouseHover(index)}
                        size={60}
                        
                        />
                    )
                } 
                        
                
            )
        }
        <div><h1>{`Star Rating = ${currentIndex} `}</h1></div>

        </div>
    )
}