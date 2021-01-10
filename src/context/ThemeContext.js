import React, { useState, useEffect } from "react";

const defaultState = {
    dark: false,
    toggleDark: () => {},
}

const ThemeContext = React.createContext(defaultState)

const ThemeProvider = ({ children }) => {
    const [dark, setDark] = useState(false);


const toggleDark = () => {
    localStorage.setItem("dark", JSON.stringify(!dark))
    setDark(!dark);
}

useEffect(() => {
    const isDark = JSON.parse(localStorage.getItem("dark"));
    if(isDark) {
        setDark(isDark);
    }
}, [])

return (
    <ThemeContext.Provider
        value={{dark, toggleDark}}
    >
        {children}
    </ThemeContext.Provider>
);

}

export default ThemeContext;

export { ThemeProvider };