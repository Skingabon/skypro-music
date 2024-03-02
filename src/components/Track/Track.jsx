import React from "react";
import * as S from "./track.styled";
import { useTrackContext } from "../../context/track";
import { timeFormat } from "../../utils/helpers";


export function Track({ track }) {
  const {setCurrentTrack} = useTrackContext()



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
