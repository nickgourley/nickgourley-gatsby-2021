import React from "react"
import { render, wait } from "@testing-library/react"

import UnitConverterPage from "../unit-converter";

test("Displays the correct title", async () => {
  const { getByTestId } = render(<UnitConverterPage />)
  await wait(() => expect(document.title).toEqual("Unit Converter"))
  expect(getByTestId("hero-title")).toHaveTextContent("Unit Converter")
})