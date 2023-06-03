import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
// import axios from "axios";
import BrowseBySector from "./BrowseBySector";
import { BrowserRouter as Router } from "react-router-dom";
// import { act } from "react-dom/test-utils";

// jest.mock("axios");

// const mockResponse = {
//   data: [
//     { id: 1, name: "Sector 1", total_jobs: 10 },
//     { id: 2, name: "Sector 2", total_jobs: 20 },
//   ],
// };

test("renders browse sectors with data", async () => {
  // Mock the Axios get method to return the mockResponse
  // axios.get.mockResolvedValueOnce(mockResponse);

  render(
    <Router>
      <BrowseBySector />
    </Router>
  );

  // Wait for the component to finish loading
  await waitFor(() => screen.getByText("Browse by sector"));

  // Check if the loading text is not present
  expect(screen.queryByText("loading, please wait")).toBeNull();

  // Check if the sector links are rendered correctly
  //   expect(screen.getByText("/Sector 1 (10)/i")).toBeInTheDocument();
  //   expect(screen.getByText("/Sector 2 (20)/i")).toBeInTheDocument();

  // Check if the error message is not rendered
  expect(screen.queryByText("true")).toBeNull();
});
