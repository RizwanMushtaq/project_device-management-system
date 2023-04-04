import { ReactNode } from "react";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";
import {Device, DevicePayload} from "./device-types";

export interface LayoutProps {
  children?: ReactNode;
}

export interface DeviceUpdated {
  data: {
    affected: number;
  };
}

export interface responseAddNewDevice {
  data?: Device;
  error?: FetchBaseQueryError | SerializedError;
}

export interface responseUpdateDevice {
  data?: {};
  error?: FetchBaseQueryError | SerializedError;
}

export interface DeviceFormProps {
  formInitialValues: DevicePayload;
  handleFormData: Function;
}

export interface DeviceCardProps {
  device: Device;
  handleDeleteAction: Function;
}
