import React, { FC } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage: FC = () => (
  <div>
    <SEO title="404: Not found" />
    <h1 data-testid="hero-title">404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </div>
)

export default NotFoundPage
