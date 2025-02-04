import React, { useEffect, useState } from "react";
import * as S from "./track.styled";
import { timeFormat } from "../../utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentTrack } from "../../redux/trackSlice";
import { useUserContext } from "../../context/user";
import { useAddFavoriteTrackMutation, useDelFavoriteTrackMutation } from "../../Api/tracksApi";


export function Track({ track, tracks }) {
  const [isLike, setIsLike] = useState(false);
  const dispatch = useDispatch();
  const [addLike] = useAddFavoriteTrackMutation();
  const [delLike] = useDelFavoriteTrackMutation();
  const { currentTrack, isPlaying } = useSelector((state) => state.tracks)
  const { user } = useUserContext();
  const trackLike = track.stared_user ? track.stared_user.some(({ id }) => id === user.id) : true
  //  console.log(trackLike);

  function renderIcon() {
    if (!currentTrack) {
      return <S.TrackTitleSvg alt="music">
        <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
      </S.TrackTitleSvg>
    }
    return currentTrack._id === track._id
      ? <S.Dote $isPlaying={isPlaying} /> :
      <S.TrackTitleSvg alt="music">
        <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
      </S.TrackTitleSvg>
  }

  useEffect(() => {
    setIsLike(trackLike)
  }, [tracks])

  function toggleLike(event) {
    // по клику не должен вкл трек
    event.stopPropagation()
    console.log(event);
    if (isLike) {
      delLike({ id: track._id })
      return
    }
    addLike({ id: track._id })
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
          <S.TrackTimeSvg alt="like" onClick={toggleLike} >
            <use xlinkHref={`/img/icon/sprite.svg#icon-like${isLike ? "-active" : ""}`}></use>
          </S.TrackTimeSvg>
          <S.TrackTimeText>
            {timeFormat(track.duration_in_seconds)}
          </S.TrackTimeText>
        </S.TrackTime>
      </>
    </S.PlaylistTrack>
  );
}


