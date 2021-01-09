import React from "react"
import { render, wait } from "@testing-library/react"

import WeatherPage from "../weather";

test("Displays the correct title", async () => {
  const { getByTestId } = render(<WeatherPage />)
  await wait(() => expect(document.title).toEqual("Weather Forecaster"))
  expect(getByTestId("hero-title")).toHaveTextContent("Weather Forecaster")
})