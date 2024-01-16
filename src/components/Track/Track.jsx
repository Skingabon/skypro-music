import React, { useState } from "react";

export function Track({name, autor, coment, album, time}) {
   
    //тут settimeout
    const [isLoading, setIsLoading] = useState(true)

    setTimeout(() => {
        setIsLoading(false)
    }, 5000);
    
    return (
<div className="playlist__track track">
{isLoading ? (<img src="img/PlayList.svg" alt="" />) : (
            <>
        <div className="track__title">
            <div className="track__title-image">
                <svg className="track__title-svg" alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                </svg>
            </div>
            <div className="track__title-text">
                <a className="track__title-link" href="http://">
                {name} <span className="track__title-span">
                {coment}
                </span>
                </a>

            </div>
        </div>
        <div className="track__author">
            <a className="track__author-link" href="http://">
            {autor}
            </a>
        </div>
        <div className="track__album">
            <a className="track__album-link" href="http://">
                {album}
            </a>
        </div>
        <div className="track__time">
            <svg className="track__time-svg" alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            </svg>
            <span className="track__time-text">{time}</span>
        </div></>
        )
    }
    </div>
    
    );
}
