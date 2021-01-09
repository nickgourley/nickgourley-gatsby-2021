import React from "react"
import { render } from "@testing-library/react"
import renderer from "react-test-renderer"

import Header from "../header"

describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Header siteTitle="Nicholas Gourley" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})