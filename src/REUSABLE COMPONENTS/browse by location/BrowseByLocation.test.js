import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import axios from "axios";
import BrowseByLocations from "./BrowseByLocations";
import { BrowserRouter as Router } from "react-router-dom";

jest.mock("axios");

describe("BrowseByLocations", () => {
  // afterEach(() => {
  //   jest.clearAllMocks();
  // });

  it("renders the component with data", async () => {
    const responseData = [
      {
        id: 1,
        city: "City 1",
        district: "District 1",
        total_jobs: 5,
      },
      {
        id: 2,
        city: "City 2",
        district: "District 2",
        total_jobs: 3,
      },
    ];

    axios.get.mockResolvedValueOnce({ data: responseData });

    render(
      <Router>
        <BrowseByLocations />
      </Router>
    );

    await waitFor(() => {
      expect(screen.getByText("Browse by location")).toBeInTheDocument();
    });

    // responseData.forEach((location) => {
    //   const locationTextRegex = new RegExp(
    //     `${location.city} ${location.district}\\s*\\(${location.total_jobs}\\)`
    //   );
    //   // expect(screen.getByText(locationTextRegex)).toBeInTheDocument();
    // });
    expect(screen.getByText("City 2")).toBeInTheDocument();
  });
});
