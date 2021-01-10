import React, { FC } from "react"

import SEO from "../../components/seo"
import CalculatorApp from "../../components/calculator-app";

const CalculatorPage: FC = () => {
    return (
        <div>
            <SEO title="Calculator" />
            <h1 data-testid="hero-title">Calculator</h1>
            <hr />
            <CalculatorApp />
        </div>
    );
}

export default CalculatorPage;