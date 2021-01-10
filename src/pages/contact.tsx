import React, { FC } from "react"

import SEO from "../components/seo"

const ContactPage: FC = () => {
    return (
        <div>
            <SEO title="Contact" />
            <h1 data-testid="hero-title">Contact</h1>
            <hr />
        </div>
    );
}

export default ContactPage;