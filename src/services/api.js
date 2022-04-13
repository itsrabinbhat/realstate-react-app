import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://bayut.p.rapidapi.com";
const headers = {
  "X-RapidAPI-Host": "bayut.p.rapidapi.com",
  "X-RapidAPI-Key": "07e738e957msha128076d1898cf4p1b1001jsn0d5c3a9d5e49",
};

const createRequest = (url) => ({ url, headers });

export const realstateApi = createApi({
  reducerPath: "realstateApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getProperties: builder.query({
      query: (purpose) =>
        createRequest(
          `/properties/list?locationExternalIDs=5002&purpose=${purpose}&hitsPerPage=10`
        ),
    }),
  }),
});

export const { useGetPropertiesQuery } = realstateApi;
