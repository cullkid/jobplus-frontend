import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Apply from "./Apply";
import { BrowserRouter as Router } from "react-router-dom";
import { createMemoryHistory } from "history";

describe("Apply component", () => {
  test("renders Apply component correctly", () => {
    render(
      <Router>
        <Apply />
      </Router>
    );

    const listSkills = screen.getAllByText("Skills");
    expect(listSkills).toHaveLength(9);
  });

  test("render apply now link and navigate to sendapply page", () => {
    const history = createMemoryHistory();
    history.push("/sendapply"); // Set the initial route

    render(
      <Router>
        <Apply />
      </Router>
    );

    const applyLinks = screen.getAllByText("Apply Now");
    expect(applyLinks).toHaveLength(2);
    applyLinks.forEach((applyLinks) => {
      fireEvent.click(applyLinks);
    });

    // Assert the expected navigation behavior
    expect(history.location.pathname).toBe("/sendapply");
  });
});
