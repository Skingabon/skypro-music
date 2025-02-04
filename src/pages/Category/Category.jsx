import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CenterBlock } from "../../components/CenterBlock/CenterBlock";
import {useGetCategoryByIdMutation, useGetTracksQuery} from "../../Api/tracksApi";

export const Category = () => {
  const params = useParams();
  const [categoryTracks, setCategoryTracks] = useState([])
  const { data: tracksAll, isLoading: isLoadingTracksAll, } = useGetTracksQuery()
  const [getData, { data: tracks, error, isLoading, }] = useGetCategoryByIdMutation()


  console.log(tracksAll)
  console.log(tracks)

  useEffect(() => {
    console.log(tracksAll)
    if(tracksAll) {
      getData({ id: Number(params.id) + 1 }).then((res) => {
        console.log(res)
      })
            const tracksCategory = tracksAll.data.filter(el => tracks.data.items.includes(el._id) )
      setCategoryTracks(tracksCategory)
      console.log(tracksCategory)
    }
  }, [])
  // console.log(categoryTracks)
  return (
    <CenterBlock
      isError={error}
      tracks={categoryTracks}
      isLoading={isLoading || isLoadingTracksAll}
      heading={'' }
    />
  );
};
