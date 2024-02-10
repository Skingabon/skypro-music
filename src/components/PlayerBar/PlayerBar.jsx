import React from "react";
import * as S from "./PlayerBar.styled";

export function PlayerBar({ isLoading }) {
  return (
    <S.Bar>
      <S.BarContent>
        <S.BarPlayerProgress />
        <S.BarPlayerBlock>
          <S.BarPlayer>
            <S.PlayerControl>
              <S.BtnPrev>
                <S.BtnPrevSvg alt="prev">
                  <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                </S.BtnPrevSvg>
              </S.BtnPrev>
              <S.BtnPlay>
                <S.BtnPlaySvg alt="play">
                  <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                </S.BtnPlaySvg>
              </S.BtnPlay>
              <S.BtnNext>
                <S.BtnNextSVG alt="next">
                  <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                </S.BtnNextSVG>
              </S.BtnNext>
              <S.BtnRepeat>
                <S.BtnRepeatSVG alt="repeat">
                  <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                </S.BtnRepeatSVG>
              </S.BtnRepeat>
              <S.BtnShuffle>
                <S.BtnShuffleSVG alt="shuffle">
                  <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                </S.BtnShuffleSVG>
              </S.BtnShuffle>
            </S.PlayerControl>
            <S.PlayerTruckPlay>
              <S.TruckPlayContain>
                {isLoading ? (
                  <img src="img/Player_Skeleton.svg" alt="" />
                ) : (
                  <>
                    <S.TruckPlayImg>
                      <S.TruckPlaySVG alt="music">
                        <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                      </S.TruckPlaySVG>
                    </S.TruckPlayImg>
                    <S.TruckPlayAuthor>
                      <S.TruckPlayAuthorLink href="http://">
                        Ты та...
                      </S.TruckPlayAuthorLink>
                    </S.TruckPlayAuthor>
                    <S.TruckPlayAlbum>
                      <S.TruckPlayAlbumLink href="http://">
                        Баста
                      </S.TruckPlayAlbumLink>
                    </S.TruckPlayAlbum>
                  </>
                )}
              </S.TruckPlayContain>
              <S.TruckPlayLikeDis>
                <S.TruckPlayLikeDislike>
                  <S.TruckPlayLikeSVG alt="like">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  </S.TruckPlayLikeSVG>
                </S.TruckPlayLikeDislike>
                <S.TruckPlayDisLike>
                  <S.TruckPlayDisLikeSVG alt="dislike">
                    <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                  </S.TruckPlayDisLikeSVG>
                </S.TruckPlayDisLike>
              </S.TruckPlayLikeDis>
            </S.PlayerTruckPlay>
          </S.BarPlayer>
          <S.BarVolumeBlock>
            <S.VolumeContent>
              <S.VolumeImg>
                <S.VolumeSVG alt="volume">
                  <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
                </S.VolumeSVG>
              </S.VolumeImg>
              <S.VolumeProgress>
                <S.VolumeProgressLine type="range" name="range" />
              </S.VolumeProgress>
            </S.VolumeContent>
          </S.BarVolumeBlock>
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  );
}
