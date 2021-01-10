import React, { FC } from "react"

import SEO from "../../components/seo"

const TodoPage: FC = () => {
    return (
        <div>
            <SEO title="Make a List" />
            <h1 data-testid="hero-title">Make a List</h1>
            <hr />
        </div>
    );
}

export default TodoPage;