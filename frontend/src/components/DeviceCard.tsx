import { DeviceCardProps } from "../utils/types";
import { Link } from "react-router-dom";
import React from "react";

export default function DeviceCard(
  deviceCardProps: DeviceCardProps
): JSX.Element {
  return (
    <>
      <div className="card m-auto mb-5" key={deviceCardProps.device.id}>
        <div className="card-body d-flex flex-column gap-3">
          <h3 className="card-title">
            device name : {deviceCardProps.device.deviceName}
          </h3>
          <h3 className="card-title">
            device type : {deviceCardProps.device.deviceType}
          </h3>
          <Link
            className="btn btn-primary"
            to={"/devices/" + deviceCardProps.device.id}
          >
            show details
          </Link>
          <button
            className="btn btn-danger"
            id={deviceCardProps.device.id}
            onClick={() => deviceCardProps.handleDeleteAction(event)}
          >
            delete device
          </button>
        </div>
      </div>
    </>
  );
}
