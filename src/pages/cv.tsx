import React, { FC } from "react"

import SEO from "../components/seo"

const CvPage: FC = () => {
    return (
        <div>
            <SEO title="CV" />
            <h1 data-testid="hero-title">CV</h1>
            <hr />
        </div>
    );
}

export default CvPage;