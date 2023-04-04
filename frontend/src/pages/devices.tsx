import { useDeleteDeviceMutation, useGetDevicesQuery } from "../store/apiSlice";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import React from "react";
import DeviceCard from "../components/DeviceCard";
import {Device, DeviceType} from "../utils/device-types";

export default function Devices(): JSX.Element {
  const deviceType = DeviceType;
  const all = "all";
  const [deviceSortSelect, setDeviceSortSelect] = React.useState<
    Device | string
  >(all);

  const { data, isLoading, isSuccess, isError, error } = useGetDevicesQuery();
  const [deleteDevice] = useDeleteDeviceMutation();

  const deleteHandler = async (event: Event | undefined) => {
    if (event) {
      const id = (event.target as HTMLElement).id;
      try {
        await deleteDevice(id);
      } catch (err) {
        console.error("Failed to delete the post: ", err);
      }
    }
  };

  if (isLoading) {
    return (
      <Layout>
        <div>Loading</div>
      </Layout>
    );
  }

  if (isError) {
    return <Layout>{isError && <div>{JSON.stringify(error)}</div>}</Layout>;
  }

  return (
    <Layout>
      <h6 className="m-5">
        <Link to="/">back to home</Link>
      </h6>
      <h2 className="m-5">List of Devices</h2>
      <h5 className="m-5">
        <Link to="/add-device">Add Device</Link>
      </h5>
      <div className="form-group mt-3 mb-3">
        <label className="mb-2">Sort Device Type</label>
        <select
          name="deviceType"
          className="form-control form-select"
          defaultValue={all}
          onChange={(event) => setDeviceSortSelect(event.target.value)}
          required
        >
          <option value={all}>Show All</option>
          <option value={deviceType.smartPhone}>Smart Phone</option>
          <option value={deviceType.camera}>Camera</option>
          <option value={deviceType.tablet}>Tablet</option>
        </select>
      </div>
      {isSuccess &&
        data.map((device: Device) => {
          if (
            deviceSortSelect === all ||
            device.deviceType === deviceSortSelect
          ) {
            return (
              <DeviceCard
                key={device.id}
                device={device}
                handleDeleteAction={deleteHandler}
              ></DeviceCard>
            );
          }
        })}
    </Layout>
  );
}
