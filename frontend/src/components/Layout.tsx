import { LayoutProps } from "../utils/types";

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <div className="page-container">
        <div className="page-row">{children}</div>
      </div>
    </>
  );
}
