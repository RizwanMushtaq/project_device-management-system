import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { DeviceUpdated, responseUpdateDevice } from "../utils/types";
import { Device, DevicePayload } from "../utils/device-types";

const apiUrl = import.meta.env.VITE_API_URL;

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
  tagTypes: ["POST", "DELETE", "PATCH"],
  endpoints: (builder) => ({
    getDevices: builder.query<Device[], void>({
      query: () => "/devices",
      providesTags: ["POST", "DELETE", "PATCH"],
    }),
    getDevice: builder.query<Device, string>({
      query: (deviceId: string) => `/devices/${deviceId}`,
      providesTags: ["PATCH"],
    }),
    addNewDevice: builder.mutation<Device, DevicePayload>({
      query: (payload: DevicePayload) => ({
        url: "/devices",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["POST"],
    }),
    deleteDevice: builder.mutation<DeviceUpdated, string>({
      query: (deviceId: string) => ({
        url: `/devices/${deviceId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["DELETE"],
    }),
    updateDevice: builder.mutation<responseUpdateDevice, Device>({
      query: (payload) => ({
        url: `/devices/${payload.id}`,
        method: "PATCH",
        body: payload,
      }),
      invalidatesTags: ["PATCH"],
    }),
  }),
});

export const {
  useGetDevicesQuery,
  useGetDeviceQuery,
  useAddNewDeviceMutation,
  useDeleteDeviceMutation,
  useUpdateDeviceMutation,
} = apiSlice;
