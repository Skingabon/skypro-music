import React from "react";
// import "./centerBlock.css";
import { Search } from "../Search/Search";
import { CenterBlockFilter } from "../CenterBlockFilter/CenterBlockFilter";
import { Track } from "../Track/Track";
import * as S from "./centerBlock.styled";

//В домешней работе нужно реализовать отображение скелетонов в течении 5 секунд на время загрузки данных
//Нужно соединить состояние, которое использовал в бургер-меню, использовать use-effect (поскольку нужно замокать loading) и в нем изменять состояние
//Дальше нужно использовать props и технику поднятия состояния (или lifting state-up), чтобы на самом верхнем уровне  приложения это состояние загрузки хранить
//а дальше его вниз по приложению с помощью props в компоненты пробрасывать (в компонент списка плей треков, компонент плей-листов, компонент музыкального плеера)
//и уже там на основе состояния isLoading показывать скелетоны или нет

export function CenterBlock() {
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
            {data.map((elem, index) => (
              <Track
                key={index}
                name={elem.name}
                coment={elem.coment}
                autor={elem.autor}
                album={elem.album}
                time={elem.time}
              />
            ))}
          </S.PlayListItem>
        </S.ContentPlayList>
      </S.CenterBlockContent>
    </S.MainCenterBlock>
  );
}
