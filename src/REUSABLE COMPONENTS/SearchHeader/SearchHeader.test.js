import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import SearchHeader from "./SearchHeader";
import { BrowserRouter as Router } from "react-router-dom";
import { MemoryRouter, useNavigate } from "react-router-dom";

jest.mock("axios");

describe("SearchHeader component", () => {
  test("renders the component", () => {
    render(
      <Router>
        <SearchHeader />
      </Router>
    );

    // Assert that the component is rendered successfully
    expect(screen.getByLabelText("What")).toBeInTheDocument();
    expect(screen.getByLabelText("Where")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "search" })).toBeInTheDocument();
  });

  jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: jest.fn(),
  }));

  test("should call handleSearch and navigate to filter page", () => {
    const navigate = jest.fn();
    useNavigate.mockImplementation(() => navigate);

    render(
      <Router>
        <SearchHeader />
      </Router>
    );

    const searchButton = screen.getByText("search");
    fireEvent.click(searchButton);

    expect(navigate).toHaveBeenCalledWith("/filter", {
      state: { what: "", where: "" },
    });
  });
});
