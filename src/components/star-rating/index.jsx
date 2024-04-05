
import { FaStar } from 'react-icons/fa'
import React, { useEffect, useState } from "react";


export default function StarRating({ noOfstars }) {

    const [rating, setRating] = useState(0)
    const [rover, setHover] = useState(0)

    function handleClick(getCurrentIndex) {
        console.log(getCurrentIndex)
    }

    function handleMouseEnter(getCurrentIndex) {
        console.log(getCurrentIndex)
    }

    function handleMouseLeave(getCurrentIndex) {
        console.log(getCurrentIndex)
    }

    return <div className="star-rating">
        {
            [...Array(noOfstars)].map((_, index) => {
                index += 1


                return <FaStar
                    key={index}
                    onClick={() => handleClick()}
                    onMouseMove={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                    size={40}
                />
            })
        }


    </div>
}