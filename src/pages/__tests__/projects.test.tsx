import React from "react"
import { render, wait } from "@testing-library/react"

import ProjectsPage from "../projects";

test("Displays the correct title", async () => {
  const { getByTestId } = render(<ProjectsPage />)
  await wait(() => expect(document.title).toEqual("Projects"))
  expect(getByTestId("hero-title")).toHaveTextContent("Projects")
})