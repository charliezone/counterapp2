import { assert, beforeEach, describe, expect, test } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "../App";

describe("App component tests", () => {
  beforeEach(() => {
    render(<App />);
  });

  test("click the + btn increase the counter", async () => {
    const plusBtn = screen.getByRole("button", { name: "+" });
    const counter = screen.getByLabelText("Counter");

    fireEvent.click(plusBtn);

    await waitFor(() => {
      expect(+counter.value).toBe(1);
    });
  });

  test("click the - btn decrease the counter", async () => {
    const plusBtn = screen.getByRole("button", { name: "+" });
    const minusBtn = screen.getByRole("button", { name: "-" });
    const counter = screen.getByLabelText("Counter");

    fireEvent.click(plusBtn);
    fireEvent.click(plusBtn);
    fireEvent.click(minusBtn);

    await waitFor(() => {
      expect(+counter.value).toBe(1);
    });
  });
});
