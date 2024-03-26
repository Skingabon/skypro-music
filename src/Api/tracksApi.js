import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const tracksApi = createApi({
    reducerPath: "tracksApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://skypro-music-api.skyeng.tech/catalog",
    }),
    endpoints: (builder) => ({
      getTracks: builder.query({
        query: () => ({
            url: "/track/all/",
            method: "GET",
            // headers: 
        })
      }),
      getFavoriteTracks: builder.query({
        query: () => ({
            url: "/track/favorite/all/",
            method: "GET",
            headers: {
                authorization: "asd_Token"
            }
        })
      })
    })
})

export const { useGetTracksQuery, useGetFavoriteTracksQuery } = tracksApi