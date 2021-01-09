import React from "react"
import { render, wait } from "@testing-library/react"

import NotesPage from "../notes";

test("Displays the correct title", async () => {
  const { getByTestId } = render(<NotesPage />)
  await wait(() => expect(document.title).toEqual("Notes App"))
  expect(getByTestId("hero-title")).toHaveTextContent("Notes App")
})