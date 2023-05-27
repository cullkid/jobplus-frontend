import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import FullLgin from "./FullLgin";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContext } from "../../CONTEXT/AuthContext";
import { useNavigate } from "react-router-dom";

jest.mock("axios");
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("FullLgin component", () => {
  test("renders the component", () => {
    render(
      <Router>
        <FullLgin />
      </Router>
    );

    // Assert that the component is rendered successfully
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
  });

  test("submits the form and handles error", async () => {
    // Mock the axios post method to simulate an error response
    axios.post.mockRejectedValueOnce({
      response: { data: { message: "Invalid credentials" } },
    });

    render(
      <Router>
        <AuthContext.Provider
          value={{ loading: false, error: false, dispatch: jest.fn() }}
        >
          <FullLgin />
        </AuthContext.Provider>
      </Router>
    );

    // Fill in the form inputs
    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("password"), {
      target: { value: "password" },
    });

    // Simulate a form submission
    fireEvent.click(screen.getByRole("button", { name: "Login" }));

    // Assert that the axios post method is called with the correct arguments
    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith(
        "http://localhost:4000/api/login",
        expect.objectContaining({
          email: "test@example.com",
          password: "password",
        })
      );
    });

    // Assert that the error message is displayed
    await screen.findByText("Invalid email or password").toBeInTheDocument;
  });

  test("submits the form and handles successful login", async () => {
    // Mock the axios post method to simulate a successful response
    axios.post.mockResolvedValueOnce({ data: { token: "exampleToken" } });

    // Mock the useNavigate hook to simulate the redirection
    const mockNavigate = jest.fn();
    useNavigate.mockReturnValue(mockNavigate);

    render(
      <Router>
        <AuthContext.Provider
          value={{ loading: false, error: false, dispatch: jest.fn() }}
        >
          <FullLgin />
        </AuthContext.Provider>
      </Router>
    );

    // Fill in the form inputs
    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("password"), {
      target: { value: "password" },
    });

    // Simulate a form submission
    fireEvent.click(screen.getByRole("button", { name: "Login" }));

    // Assert that the axios post method is called with the correct arguments
    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith(
        "http://localhost:4000/api/login",
        expect.objectContaining({
          email: "test@example.com",
          password: "password",
        })
      );
    });

    // Assert that the user is redirected to the home page
    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith("/");
    });
  });
});
