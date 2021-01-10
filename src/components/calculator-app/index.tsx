import React, { useState, FC } from "react";

const CalculatorApp: FC = () => {
    const [display, setDisplay] = useState<string>('0');
    return (
        <div>
            <div>
                <div>Screen</div>
                <div>{display}</div>
            </div>
            <div>button section</div>
        </div>
    );
}

export default CalculatorApp;