import React from "react";
import { CenterBlock } from "../../components/CenterBlock/CenterBlock";
import { useGetTracksQuery } from "../../Api/tracksApi";




export const Main = () => {

  const { data: tracks, error, isLoading, } = useGetTracksQuery()

  return (
    <CenterBlock isError={error} isLoading={isLoading} tracks={tracks} heading={"Треки"} />
  );
};