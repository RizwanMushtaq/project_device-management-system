import React, { ChangeEvent } from "react";
import { DeviceFormProps } from "../utils/types";
import {DevicePayload, DeviceType} from "../utils/device-types";

export default function DeviceForm(
  deviceFormProps: DeviceFormProps
): JSX.Element {
  const deviceType = DeviceType;

  const [deviceNameInput, setDeviceNameInput] = React.useState<string>(
    deviceFormProps.formInitialValues.deviceName
  );
  const [deviceTypeSelect, setDeviceTypeSelect] = React.useState<DeviceType>(
    deviceFormProps.formInitialValues.deviceType
  );
  const [ownerNameInput, setOwnerNameInput] = React.useState<string>(
    deviceFormProps.formInitialValues.ownerName
  );
  const [batteryStatusInput, setBatteryStatusInput] = React.useState<number>(
    deviceFormProps.formInitialValues.batteryStatus
  );

  const onChangeDeviceTypeSelect = (
    event: ChangeEvent<HTMLSelectElement>
  ): void => {
    switch (event.target.value) {
      case deviceType.tablet:
        setDeviceTypeSelect(deviceType.tablet);
        break;
      case deviceType.camera:
        setDeviceTypeSelect(deviceType.camera);
        break;
      case deviceType.smartPhone:
        setDeviceTypeSelect(deviceType.smartPhone);
        break;
    }
  };

  async function handleSubmit(event: React.SyntheticEvent): Promise<void> {
    event.preventDefault();

    const payload: DevicePayload = {
      deviceName: deviceNameInput,
      deviceType: deviceTypeSelect,
      ownerName: ownerNameInput,
      batteryStatus: batteryStatusInput,
    };

    let isFormSubmitSuccessful: boolean = await deviceFormProps.handleFormData(
      payload
    );
    if (isFormSubmitSuccessful) {
      setDeviceNameInput("");
      setDeviceTypeSelect(deviceType.tablet);
      setOwnerNameInput("");
      setBatteryStatusInput(0);
    }
  }

  return (
    <form className="card m-auto d-flex flex-column" onSubmit={handleSubmit}>
      <div className="form-group m-3">
        <label>Device Name</label>
        <input
          type="text"
          name="deviceName"
          className="form-control"
          placeholder="Enter device name"
          value={deviceNameInput}
          onChange={(event) => setDeviceNameInput(event.target.value)}
          required
        />
      </div>

      <div className="form-group m-3">
        <label>Select Device Type</label>
        <select
          name="deviceType"
          className="form-control form-select"
          value={deviceTypeSelect}
          onChange={onChangeDeviceTypeSelect}
          required
        >
          <option value={deviceType.smartPhone}>Smart Phone</option>
          <option value={deviceType.camera}>Camera</option>
          <option value={deviceType.tablet}>Tablet</option>
        </select>
      </div>

      <div className="form-group m-3">
        <label>Owner Name</label>
        <input
          type="text"
          name="ownerName"
          className="form-control"
          placeholder="Enter owner name"
          value={ownerNameInput}
          onChange={(event) => setOwnerNameInput(event.target.value)}
          required
        />
      </div>

      <div className="form-group m-3">
        <label>Battery Status</label>
        <input
          type="number"
          name="batteryStatus"
          min={0}
          max={100}
          className="form-control"
          placeholder="Enter Battery Status (0 - 100)"
          value={batteryStatusInput}
          onChange={(event) =>
            setBatteryStatusInput(parseInt(event.target.value))
          }
          required
        />
      </div>

      <button type="submit" className="btn btn-primary m-3">
        Submit
      </button>
    </form>
  );
}
