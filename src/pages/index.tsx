import React, { FC } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage: FC = () => (
  <div>
    <SEO title="Nicholas Gourley" />
    <h1 data-testid="hero-title">Nicholas Gourley</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </div>
)

export default IndexPage
