import React from "react";
import * as S from "./track.styled";

export function timeFormat(time) {
  const realTime = time / 60;
  const sec = Math.round(time % 60);

  return `${Math.round(realTime)}: ${String(sec).length < 2 ? "0" + sec : sec}`;
}

export function Track({ track, setCurrentTrack }) {
  return (
    <S.PlaylistTrack onClick={() => setCurrentTrack(track)}>
      <>
        <S.TrackTitle>
          <S.TrackTitleImg>
            <S.TrackTitleSvg alt="music">
              <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
            </S.TrackTitleSvg>
          </S.TrackTitleImg>
          <S.TrackTitleText>
            <S.TrackTitleLink>
              {track.name} <S.TrackTitleSpan></S.TrackTitleSpan>
            </S.TrackTitleLink>
          </S.TrackTitleText>
        </S.TrackTitle>
        <S.TrackAuthor>
          <S.TrackAuthorLink >{track.author}</S.TrackAuthorLink>
        </S.TrackAuthor>
        <S.TrackAlbum>
          <S.TrackAlbumLink >{track.album}</S.TrackAlbumLink>
        </S.TrackAlbum>
        <S.TrackTime>
          <S.TrackTimeSvg alt="time">
            <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
          </S.TrackTimeSvg>
          <S.TrackTimeText>
            {timeFormat(track.duration_in_seconds)}
          </S.TrackTimeText>
        </S.TrackTime>
      </>
    </S.PlaylistTrack>
  );
}
