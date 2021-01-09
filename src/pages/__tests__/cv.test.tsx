import React from "react"
import { render, wait } from "@testing-library/react"

import CvPage from "../cv";

test("Displays the correct title", async () => {
  const { getByTestId } = render(<CvPage />)
  await wait(() => expect(document.title).toEqual("CV"))
  expect(getByTestId("hero-title")).toHaveTextContent("CV")
})