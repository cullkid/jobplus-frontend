import { render, screen, fireEvent } from "@testing-library/react";
import JobApplyPage from "../JobApplyPage";

describe("JobApplyPage", () => {
  it("should return a JobApply component", () => {
    render(<JobApplyPage />);
    expect(screen.getByTestId("jobapply-component")).toBeTruthy;
  });
});
