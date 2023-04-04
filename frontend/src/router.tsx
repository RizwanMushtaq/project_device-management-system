import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/not-found";
import Devices from "./pages/devices";
import AddDevice from "./pages/add-device";
import DeviceDetails from "./pages/device-details";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/devices",
    element: <Devices />,
  },
  {
    path: "/devices/:id",
    element: <DeviceDetails />,
  },
  {
    path: "/add-device",
    element: <AddDevice />,
  },
]);
