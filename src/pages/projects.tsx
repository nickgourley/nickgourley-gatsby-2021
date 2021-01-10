import React, { FC } from "react"

import SEO from "../components/seo"

const ProjectsPage: FC = () => {
    return (
        <div>
            <SEO title="Projects" />
            <h1 data-testid="hero-title">Projects</h1>
            <hr />
        </div>
    );
}

export default ProjectsPage;