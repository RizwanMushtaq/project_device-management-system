import { Link } from "react-router-dom";
import Layout from "../components/Layout";

export default function Home(): JSX.Element {
  return (
    <Layout>
      <h2 className="m-5">Device Management App</h2>
      <h4>
        <Link to="/devices">show List of Devices</Link>
      </h4>
    </Layout>
  );
}
