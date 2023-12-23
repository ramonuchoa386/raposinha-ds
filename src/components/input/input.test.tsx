import React from "react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "@testing-library/react";

import Input from "./";

describe("Running Test for Marbella Input", () => {
  test("Check placeholder in Input", () => {
    render(<Input placeholder="Olá Raposinha" />);
    expect(screen.getByPlaceholderText("Olá Raposinha")).toHaveAttribute(
      "placeholder",
      "Olá Raposinha"
    );
  });

  test("renders the Input component", async () => {
    render(<Input placeholder="raposinha" />);
    const input = screen.getByPlaceholderText("raposinha") as HTMLInputElement;
    userEvent.type(input, "Olá raposinha!");
    await waitFor(() => expect(input.value).toBe("Olá raposinha!"));
  });
});
