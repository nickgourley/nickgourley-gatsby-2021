import React from "react"
import { render, wait } from "@testing-library/react"

import NotFoundPage from "../404";

test("Displays the correct title", async () => {
  const { getByTestId } = render(<NotFoundPage />)
  await wait(() => expect(document.title).toEqual("404: Not found"))
  expect(getByTestId("hero-title")).toHaveTextContent("404: Not Found")
})