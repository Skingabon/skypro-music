import React from "react";
import { Search } from "../Search/Search";
import { CenterBlockFilter } from "../CenterBlockFilter/CenterBlockFilter";
import { Track } from "../Track/Track";
import * as S from "./centerBlock.styled";
import { PlaylistTrack } from "../Track/track.styled";

export function CenterBlock({ isLoading, tracks }) {

  const data = [
    {
      name: "Guilt",
      coment: "",
      autor: "Nero",
      album: "Welcome Reality",
      time: "4:44",
    },
    {
      name: "Elektro",
      coment: "",
      autor: "Dynoro, Outwork, Mr. Gee",
      album: "Elektro",
      time: "2:22",
    },
    {
      name: "I’m Fire",
      coment: "",
      autor: "Ali Bakgor",
      album: "I’m Fire",
      time: "2:22",
    },
    {
      name: "Non Stop",
      coment: "",
      autor: " Стоункат, Psychopath",
      album: "Non Stop",
      time: "4:12",
    },
    {
      name: "Knives n Cherries",
      coment: "",
      autor: "minthaze",
      album: "Captivating",
      time: "1:48",
    },
    {
      name: "How Deep Is Your Love",
      coment: "",
      autor: "Calvin Harris, Disciples",
      album: "How Deep Is Your Love",
      time: "3:32",
    },
    {
      name: "Morena",
      coment: "",
      autor: "Tom Boxer",
      album: "Soundz Made in Romania",
      time: "3:36",
    },
    {
      name: "Run Run",
      coment: " (feat. AR/CO)",
      autor: "Jaded, Will Clarke, AR/CO",
      album: "Run Run",
      time: "2:54",
    },
    {
      name: "Eyes on Fire",
      coment: " (Zeds Dead Remix)",
      autor: "Blue Foundation, Zeds Dead",
      album: "Eyes on Fire",
      time: "5:20",
    },
    {
      name: "Mucho Bien",
      coment: " (Hi Profile Remix)",
      autor: "HYBIT, Mr. Black, Offer Nissim, Hi Profile",
      album: "Mucho Bien",
      time: "3:41",
    },
  ];
  return (
    <S.MainCenterBlock>
      <Search />
      <S.H2CenterBlock>Треки</S.H2CenterBlock>
      <CenterBlockFilter />
      <S.CenterBlockContent>
        <S.ContentTitle>
          <S.PlayListTitleTrack $width={447}
          >Трек</S.PlayListTitleTrack>
          <S.PlayListTitleTrack $width={321}>
            ИСПОЛНИТЕЛЬ
          </S.PlayListTitleTrack>
          <S.PlayListTitleTrack $width={245}>АЛЬБОМ</S.PlayListTitleTrack>
          <S.PlayListTitleTrack $width={60}>
            <S.PlayListTitleSVG alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
            </S.PlayListTitleSVG>
          </S.PlayListTitleTrack>
        </S.ContentTitle>
        <S.ContentPlayList>
          <S.PlayListItem>
            {isLoading ? (data.map((d, i) => <PlaylistTrack key={i}><img src="img/PlayList.svg" alt="" /></PlaylistTrack>)) : (
              tracks.map((elem, index) => (
                <Track
                  key={index}
                  name={elem.name}
                  coment={elem.id}
                  autor={elem.author}
                  album={elem.album}
                  time={elem.duration_in_seconds
                  }
                />
              ))
            )}


          </S.PlayListItem>
        </S.ContentPlayList>
      </S.CenterBlockContent>
    </S.MainCenterBlock>
  );
}
