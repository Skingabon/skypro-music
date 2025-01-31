import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { forceLogout } from "../utils/helpers"

const baseQueryRefresh = async (args, api, extraOptions) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: "https://skypro-music-api.skyeng.tech",
    prepareHeaders: (headers) => {
      const token = JSON.parse(localStorage.getItem("user")).res.access
      if (token) {
        headers.set("authorization", `Bearer ${token}`)
      }
      return headers
    }
  })
  const refresh = JSON.parse(localStorage.getItem("user")).res.refresh
  //console.log(refresh);
  if (!refresh) {
    // делаю выход из приложения
    forceLogout()
  }
  const result = await baseQuery(args, api, extraOptions)
  if (result?.error?.status === 401) {
    const refreshToken = await baseQuery({
      url: "/user/token/refresh/",
      method: "POST",
      body: {
        refresh
      }
    }, api, extraOptions)
    if (!refreshToken.data.access) {
      // делаю выход из приложения
      forceLogout()
      return
    }
    const user = JSON.parse(localStorage.getItem("user"))
    localStorage.setItem("user", JSON.stringify({
      ...user, res: {
        access: refreshToken.data.access,
        refresh: user.res.refresh
      }
    }))
    const retryResult = await baseQuery(args, api, extraOptions)
    return retryResult
  }

  return result
}



export const tracksApi = createApi({
  reducerPath: "tracksApi",
  tagTypes: ["LIKE"],
  baseQuery: baseQueryRefresh,
  endpoints: (builder) => ({
    getTracks: builder.query({
      query: () => ({
        url: "/catalog/track/all/",
        method: "GET",
        // headers: 
      }),
      providesTags: ["LIKE"]

    }),
    getFavoriteTracks: builder.query({
      query: () => ({
        url: "/catalog/track/favorite/all/",
        method: "GET",
      }),
      providesTags: ["LIKE"]
    }),
    addFavoriteTrack: builder.mutation({
      query: ({ id }) => ({
        url: `/catalog/track/${id}/favorite/`,
        method: "POST",
      }),
      invalidatesTags: ["LIKE"]
    }),
    delFavoriteTrack: builder.mutation({
      query: ({ id }) => ({
        url: `/catalog/track/${id}/favorite/`,
        method: "DELETE",
      }),
      invalidatesTags: ["LIKE"]
    }),
    getCategoryById: builder.query({
    query: ({ id }) => ({
      url: `/catalog/selection/${id}/`,
      // GET по умолчанию
    }),
    providesTags: ["LIKE"] 
    })
  })
})


export const { useGetCategoryByIdQuery, useGetTracksQuery, useGetFavoriteTracksQuery, useAddFavoriteTrackMutation, useDelFavoriteTrackMutation } = tracksApi



//сделать outlet на категориях
//api для получения всех треков из категорий через rtk.query
//добавление и удаление лайков в избранных треках без всплытия

// https://redux-toolkit.js.org/rtk-query/usage/automated-refetching