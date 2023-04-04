import { Link } from "react-router-dom";
import React from "react";
import { useAddNewDeviceMutation } from "../store/apiSlice";
import Layout from "../components/Layout";
import DeviceForm from "../components/DeviceForm";
import { responseAddNewDevice } from "../utils/types";
import {DevicePayload, DeviceType} from "../utils/device-types";

export default function AddDevice(): JSX.Element {
  const [isDeviceAdded, setIsDeviceAdded] = React.useState<boolean>(false);
  const [addNewDevice] = useAddNewDeviceMutation();

  const formInitialValues: DevicePayload = {
    deviceName: "",
    deviceType: DeviceType.smartPhone,
    ownerName: "",
    batteryStatus: 0,
  };

  const handleFormData = async (payload: DevicePayload): Promise<boolean> => {
    console.log("In handle form data");
    console.log(payload);

    try {
      const result: responseAddNewDevice = await addNewDevice(payload);
      console.log(result);
      if (result.data) {
        setIsDeviceAdded(true);
        return true;
      }
      return false;
    } catch (err) {
      console.error("Failed to save the post: ", err);
      return false;
    }
  };

  return (
    <Layout>
      <h6 className="m-5">
        <Link to="/devices">back to devices</Link>
      </h6>

      {isDeviceAdded && (
        <div className="alert alert-success">
          <strong>Success!</strong> Device Added
        </div>
      )}

      <DeviceForm
        formInitialValues={formInitialValues}
        handleFormData={handleFormData}
      ></DeviceForm>
    </Layout>
  );
}
