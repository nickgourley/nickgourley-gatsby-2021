import React from "react"
import { render, wait } from "@testing-library/react"

import IndexPage from "../index";

test("Displays the correct title", async () => {
  const { getByTestId } = render(<IndexPage />)
  await wait(() => expect(document.title).toEqual("Nicholas Gourley"))
  expect(getByTestId("hero-title")).toHaveTextContent("Nicholas Gourley")

})