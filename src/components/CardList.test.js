import React from "react";
import CardList from "./CardList";
import { render } from "@testing-library/react";

it("expect to render CardList component", () => {
  const mockRobots = [
    {
      id: 1,
      name: "john Snow",
      userName: "JohnJohn",
      email: "john@gmail.com",
    }
  ];
  expect(render(<CardList robots={mockRobots}/>)).toMatchSnapshot();
});
