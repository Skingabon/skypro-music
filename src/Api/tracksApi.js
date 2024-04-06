import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const tracksApi = createApi({
    reducerPath: "tracksApi",
    tagTypes: ["LIKE"],
    baseQuery: fetchBaseQuery({
        baseUrl: "https://skypro-music-api.skyeng.tech/catalog",
    }),
    endpoints: (builder) => ({
      getTracks: builder.query({
        query: () => ({
            url: "/track/all/",
            method: "GET",
            // headers: 
        }),
        providesTags: ["LIKE"]

      }),
      getFavoriteTracks: builder.query({
        query: () => ({
            url: "/track/favorite/all/",
            method: "GET",
            headers: {
                authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).res.access}`
            }
        })
      }),
      addFavoriteTrack: builder.mutation({
        query: ({ id }) => ({
            url: `/track/${id}/favorite/`,
            method: "POST",
            headers: {
                authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).res.access}`
            }
        }),
        invalidatesTags: ["LIKE"]
      }),
      delFavoriteTrack: builder.mutation({
        query: ({ id }) => ({
            url: `/track/${id}/favorite/`,
            method: "DELETE",
            headers: {
                authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).res.access}`
            }
        }),
        invalidatesTags: ["LIKE"]
      }),
    })
})


export const { useGetTracksQuery, useGetFavoriteTracksQuery, useAddFavoriteTrackMutation, useDelFavoriteTrackMutation } = tracksApi



//сделать outlet на категориях
//api для получения всех треков из категорий через rtk.query
//добавление и удаление лайков в избранных треках без всплытия

// https://redux-toolkit.js.org/rtk-query/usage/automated-refetching