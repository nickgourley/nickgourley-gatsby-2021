import React from "react"
import { render, wait } from "@testing-library/react"

import TodoPage from "../todo";

test("Displays the correct title", async () => {
  const { getByTestId } = render(<TodoPage />)
  await wait(() => expect(document.title).toEqual("Make a List"))
  expect(getByTestId("hero-title")).toHaveTextContent("Make a List")
})