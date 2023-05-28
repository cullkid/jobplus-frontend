// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

import "@testing-library/jest-dom/extend-expect";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

beforeEach(() => {
  jest.spyOn(history, "push");
});

afterEach(() => {
  jest.clearAllMocks();
});

window.history.pushState = (data, title, url) => {
  history.push(url);
};

Object.defineProperty(window, "location", {
  value: {
    pathname: "/",
  },
});
