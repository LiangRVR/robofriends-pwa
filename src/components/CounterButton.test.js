import React from "react";
import CounterButton from "./CounterButton";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

it("expect to render CounterButton component", () => {
  const mockColor = "red";
  const renderButton = render(<CounterButton color={mockColor} />);
  const { container } = renderButton;
  
  expect(container.querySelector("#counter").getAttribute("color")).toEqual(
    "red"
  );
  expect(renderButton).toMatchSnapshot();
});

it("correctly increment the counter", async () => {
  const mockColor = "red";
  const container = render(<CounterButton color={mockColor} />).container;

  const user = userEvent.setup();
  for (let i = 2; i <= 5; i++) {
    await user.click(container.querySelector("#counter"));
    expect(container.querySelector("#counter").textContent).toEqual(
      `Count: ${i}`
    );
  }
});
