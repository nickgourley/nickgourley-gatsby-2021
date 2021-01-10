import React, { FC } from "react"

import SEO from "../../components/seo"

const WeatherAppPage: FC = () => {
    return (
        <div>
            <SEO title="Weather Forecaster" />
            <h1 data-testid="hero-title">Weather Forecaster</h1>
            <hr />
        </div>
    );
}

export default WeatherAppPage;