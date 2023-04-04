import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import "@testing-library/jest-dom/extend-expect";

describe("Home component", () => {
  it("should render the heading and link", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const headingElement = screen.getByText("Device Management App");
    const linkElement = screen.getByRole("link", {
      name: "show List of Devices",
    });
    expect(headingElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });
});
