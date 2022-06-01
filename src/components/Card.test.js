import React from "react";
import Card from './Card'
import {render} from '@testing-library/react'

it("expect to render Card component", () => {
  expect(render(<Card/>)).toMatchSnapshot();
});
