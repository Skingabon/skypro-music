import React from "react";
import * as S from "./track.styled";
import { timeFormat } from "../../utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentTrack } from "../../redux/trackSlice";


export function Track({ track, tracks }) {

  const dispatch = useDispatch();
  const { currentTrack, isPlaying } = useSelector((state) => state.tracks)

  function renderIcon() {
    if (!currentTrack) {
      return <S.TrackTitleSvg alt="music">
        <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
      </S.TrackTitleSvg>
    }
    return currentTrack.id === track.id
      ? <S.Dote $isPlaying={isPlaying}/> :
      <S.TrackTitleSvg alt="music">
        <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
      </S.TrackTitleSvg>
  }


return (

  <S.PlaylistTrack onClick={() => { dispatch(setCurrentTrack({ track, tracks })); }}>
    <>
      <S.TrackTitle>
        <S.TrackTitleImg>
          {renderIcon()}
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
