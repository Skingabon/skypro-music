import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CenterBlock } from "../../components/CenterBlock/CenterBlock";
import { useGetCategoryByIdQuery } from "../../Api/tracksApi";

export const Category = () => {
  const params = useParams();
  const { data: tracks, error, isLoading, } = useGetCategoryByIdQuery({ id: params.id })
const [categoryTracks, setCategoryTracks] = useState([])

  useEffect(() => {
if(tracks) {
  setCategoryTracks(tracks.items)
}
  }, [tracks])

  return (
    <CenterBlock
      isError={error}
      tracks={categoryTracks}
      isLoading={isLoading}
      heading={`Category ${params.id}`}
    />
  );
};
