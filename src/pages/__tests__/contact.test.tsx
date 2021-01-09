import React from "react"
import { render, wait } from "@testing-library/react"

import ContactPage from "../contact";

test("Displays the correct title", async () => {
  const { getByTestId } = render(<ContactPage />)
  await wait(() => expect(document.title).toEqual("Contact"))
  expect(getByTestId("hero-title")).toHaveTextContent("Contact")
})