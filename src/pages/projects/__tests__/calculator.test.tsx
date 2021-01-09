import React from "react"
import { render, wait } from "@testing-library/react"

import CalculatorPage from "../calculator";

test("Displays the correct title", async () => {
  const { getByTestId } = render(<CalculatorPage />)
  await wait(() => expect(document.title).toEqual("Calculator"))
  expect(getByTestId("hero-title")).toHaveTextContent("Calculator")
})