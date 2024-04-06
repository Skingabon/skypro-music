import React from "react";
import { CenterBlock } from "../../components/CenterBlock/CenterBlock";
import { useGetFavoriteTracksQuery } from "../../Api/tracksApi";
export const Favorites = () => {
  const { data: tracks, error, isLoading, } = useGetFavoriteTracksQuery()

  return (
    <CenterBlock
      isError={error}
      tracks={tracks}
      isLoading={isLoading}
      heading={"Мои треки"}
    />
  );
};
