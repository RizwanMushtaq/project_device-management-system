export enum DeviceType {
    smartPhone = "Smartphone",
    tablet = "Tablet",
    camera = "Camera",
}
export interface Device {
    id: string;
    deviceName: string;
    deviceType: DeviceType;
    ownerName: string;
    batteryStatus: number;
}

export interface DevicePayload {
    deviceName: string;
    deviceType: DeviceType;
    ownerName: string;
    batteryStatus: number;
}
