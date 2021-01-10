import React, { FC } from "react"

import SEO from "../../components/seo"

const NotesPage: FC = () => {
    return (
        <div>
            <SEO title="Notes App" />
            <h1 data-testid="hero-title">Notes App</h1>
            <hr />
        </div>
    );
}

export default NotesPage;