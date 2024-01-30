import React, { useState } from "react";
import "./track.css";
import * as S from "./track.styled";

export function Track({ name, autor, coment, album, time }) {
  //тут settimeout
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 5000);

  return (
    <S.PlaylistTrack>
      {isLoading ? (
        <img src="img/PlayList.svg" alt="" />
      ) : (
        <>
          <S.TrackTitle>
            <S.TrackTitleImg>
              <S.TrackTitleSvg alt="music">
                <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
              </S.TrackTitleSvg>
            </S.TrackTitleImg>
            <div className="track__title-text">
              <S.TrackTitleLink href="http://">
                {name} <S.TrackTitleSpan>{coment}</S.TrackTitleSpan>
              </S.TrackTitleLink>
            </div>
          </S.TrackTitle>
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
          </div>
        </>
      )}
    </S.PlaylistTrack>
  );
}
