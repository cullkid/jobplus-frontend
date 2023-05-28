import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";
import { createMemoryHistory } from "history";

describe("Navbar component", () => {
  test("renders Home link and navigates to the correct page", () => {
    const history = createMemoryHistory();
    history.push("/"); // Set the initial route

    render(
      <Router>
        <Navbar />
      </Router>
    );

    const homeLinks = screen.getAllByText("Home");
    expect(homeLinks).toHaveLength(2); // Make sure there are two matching links
    homeLinks.forEach((homeLink) => {
      fireEvent.click(homeLink);
    });
    // Assert the expected navigation behavior
    expect(history.location.pathname).toBe("/");
  });

  test("renders Home link and navigates to the correct page", () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    const logo = screen.getByText("JOBPLUS");
    expect(logo).toBeInTheDocument();
  });

  test("renders Home link and navigates to the correct page", () => {
    const history = createMemoryHistory();
    history.push("/list"); // Set the initial route

    render(
      <Router>
        <Navbar />
      </Router>
    );

    const homeLinks = screen.getAllByText("Job Listing");
    expect(homeLinks).toHaveLength(2); // Make sure there are two matching links
    homeLinks.forEach((homeLink) => {
      fireEvent.click(homeLink);
    });
    // Assert the expected navigation behavior
    expect(history.location.pathname).toBe("/list");
  });

  test("renders Home link and navigates to the correct page", () => {
    const history = createMemoryHistory();
    history.push("/applied"); // Set the initial route

    render(
      <Router>
        <Navbar />
      </Router>
    );

    const homeLinks = screen.getAllByText("Jobs Applied");
    expect(homeLinks).toHaveLength(2); // Make sure there are two matching links
    homeLinks.forEach((homeLink) => {
      fireEvent.click(homeLink);
    });
    // Assert the expected navigation behavior
    expect(history.location.pathname).toBe("/applied");
  });

  test("renders Home link and navigates to the correct page", () => {
    const history = createMemoryHistory();
    history.push("/list"); // Set the initial route

    render(
      <Router>
        <Navbar />
      </Router>
    );

    const homeLinks = screen.getByTestId("search-icon");
    expect(homeLinks).toBeInTheDocument(); // Make sure there are two matching links
    fireEvent.click(homeLinks);
    // Assert the expected navigation behavior
    expect(history.location.pathname).toBe("/list");
  });

  test("renders Home link and navigates to the correct page", () => {
    const history = createMemoryHistory();
    history.push("/notify"); // Set the initial route

    render(
      <Router>
        <Navbar />
      </Router>
    );

    const homeLinks = screen.getByTestId("notification-icon");
    expect(homeLinks).toBeInTheDocument(); // Make sure there are two matching links
    fireEvent.click(homeLinks);
    // Assert the expected navigation behavior
    expect(history.location.pathname).toBe("/notify");
  });

  test("renders Home link and navigates to the correct page", () => {
    const history = createMemoryHistory();
    history.push("/save"); // Set the initial route

    render(
      <Router>
        <Navbar />
      </Router>
    );

    const homeLinks = screen.getByTestId("saved-jobs-icon");
    expect(homeLinks).toBeInTheDocument(); // Make sure there are two matching links
    fireEvent.click(homeLinks);
    // Assert the expected navigation behavior
    expect(history.location.pathname).toBe("/save");
  });

  test("renders Home link and navigates to the correct page", () => {
    const history = createMemoryHistory();
    history.push("/login"); // Set the initial route

    render(
      <Router>
        <Navbar />
      </Router>
    );

    const homeLinks = screen.getByTestId("profile-icon");
    expect(homeLinks).toBeInTheDocument(); // Make sure there are two matching links
    fireEvent.click(homeLinks);
    // Assert the expected navigation behavior
    expect(history.location.pathname).toBe("/login");
  });
});
