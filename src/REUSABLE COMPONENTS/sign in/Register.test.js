import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import axios from "axios";
import FullSignIn from "./FullSignIn";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContext } from "../../CONTEXT/AuthContext";

jest.mock("axios");

describe("FullSignIn component", () => {
  test("renders the component", () => {
    render(
      <Router>
        <FullSignIn />
      </Router>
    );

    // Assert that the component is rendered successfully
    expect(screen.getByLabelText("First name")).toBeInTheDocument();
    expect(screen.getByLabelText("Last name")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByLabelText("Confirm Password")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Register" })
    ).toBeInTheDocument();
  });

  test("submits the form and handles success", async () => {
    // Mock axios post method to return a successful response
    axios.post.mockResolvedValueOnce({ data: { token: "dummy-token" } });

    render(
      <Router>
        <AuthContext.Provider
          value={{ loading: false, error: false, dispatch: jest.fn() }}
        >
          <FullSignIn />
        </AuthContext.Provider>
      </Router>
    );

    // Fill in the form inputs
    fireEvent.change(screen.getByLabelText("First name"), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByLabelText("Last name"), {
      target: { value: "Doe" },
    });
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "john.doe@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "password" },
    });
    fireEvent.change(screen.getByLabelText("Confirm Password"), {
      target: { value: "password" },
    });

    // Submit the form
    fireEvent.click(screen.getByRole("button", { name: "Register" }));

    // Assert that the axios post method is called with the correct arguments
    expect(axios.post).toHaveBeenCalledWith("http://localhost:4000/api/users", {
      first_name: "John",
      last_name: "Doe",
      email: "john.doe@example.com",
      password: "password",
      confirm_password: "password",
    });

    // Assert that the success message is displayed
    await screen.findByText("Registration successful");
  });
});
