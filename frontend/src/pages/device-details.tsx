import { Link, useParams } from "react-router-dom";
import { useGetDeviceQuery, useUpdateDeviceMutation } from "../store/apiSlice";
import React from "react";
import Layout from "../components/Layout";
import NotFound from "./not-found";
import DeviceForm from "../components/DeviceForm";
import { responseUpdateDevice } from "../utils/types";
import {DevicePayload} from "../utils/device-types";

export default function DeviceDetails(): JSX.Element {
  const id = useParams().id ?? "";
  const [formPayload, setFormPayload] = React.useState<DevicePayload | null>(
    null
  );

  const [showForm, setShowForm] = React.useState<boolean>(false);

  const { data, isFetching, isSuccess, isError } = useGetDeviceQuery(id);
  const [updateDevice] = useUpdateDeviceMutation();

  const editDevice = (): void => {
    if (data) {
      setFormPayload({
        deviceName: data.deviceName,
        deviceType: data.deviceType,
        ownerName: data.ownerName,
        batteryStatus: data.batteryStatus,
      });
      setShowForm(true);
    }
  };

  const handleFormData = async (payload: DevicePayload): Promise<boolean> => {
    const devicePayload = {
      ...payload,
      id: id,
    };

    try {
      const result: responseUpdateDevice = await updateDevice(devicePayload);
      if (result.data) {
        setShowForm(false);
        return true;
      }
      return false;
    } catch (err) {
      console.error("Failed to save the post: ", err);
      return false;
    }
  };

  let content: JSX.Element = <></>;
  if (isFetching) {
    content = <div>Loading</div>;
  } else if (isSuccess) {
    content = (
      <>
        {!showForm && (
          <article className=" card card-body m-auto d-flex flex-column gap-3">
            <h2 className="card-title">Device Details</h2>
            <h3> name : {data.deviceName}</h3>
            <h3> type : {data.deviceType}</h3>
            <h3> ownerName : {data.ownerName}</h3>
            <h3> batteryStatus : {data.batteryStatus} %</h3>
            <button onClick={editDevice} className="btn btn-primary">
              Edit Device
            </button>
          </article>
        )}
        {showForm && formPayload && (
          <DeviceForm
            formInitialValues={formPayload}
            handleFormData={handleFormData}
          ></DeviceForm>
        )}
      </>
    );
  }

  if (isFetching) {
    return <div>Loading</div>;
  }
  if (isSuccess) {
    return (
      <Layout>
        <h6 className="m-5">
          <Link to="/devices">back to devices</Link>
        </h6>
        {content}
      </Layout>
    );
  }
  if (isError) {
    return <NotFound></NotFound>;
  }
  return <></>;
}
