import React from "react";
import * as S from "./track.styled";

export function Track({ name, autor, coment, album, time}) {
  //тут settimeout
  // const [isLoading, setIsLoading] = useState(true);

  // setTimeout(() => {
  //   setIsLoading(false);
  // }, 5000);

  return (
    <S.PlaylistTrack>
             <>
          <S.TrackTitle>
            <S.TrackTitleImg>
              <S.TrackTitleSvg alt="music">
                <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
              </S.TrackTitleSvg>
            </S.TrackTitleImg>
            <S.TrackTitleText>
              <S.TrackTitleLink href="http://">
                {name} <S.TrackTitleSpan>{coment}</S.TrackTitleSpan>
              </S.TrackTitleLink>
            </S.TrackTitleText>
          </S.TrackTitle>
          <S.TrackAuthor>
            <S.TrackAuthorLink href="http://">
              {autor}
            </S.TrackAuthorLink>
          </S.TrackAuthor>
          <S.TrackAlbum>
            <S.TrackAlbumLink href="http://">
              {album}
            </S.TrackAlbumLink>
          </S.TrackAlbum>
          <S.TrackTime>
            <S.TrackTimeSvg alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            </S.TrackTimeSvg>
            <S.TrackTimeText>{time}</S.TrackTimeText>
          </S.TrackTime>
        </>
      
    </S.PlaylistTrack>
  );
}
