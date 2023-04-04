import { Link } from "react-router-dom";

export default function NotFound(): JSX.Element {
  return (
    <div>
      <h2>OOPs Page Not Found</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
