import React from "react";
import { ThemeProvider } from "./src/context/ThemeContext";
import Firebase, { FirebaseContext } from "./src/components/Firebase";
import { UserProvider } from "./src/context/UserContext";
import Layout from "./src/components/layout";

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <Layout {...props}>{element}</Layout>
}

export const wrapRootElement = ({ element }) => (
    <FirebaseContext.Provider
        value={new Firebase()}
    >
      <UserProvider>
        <ThemeProvider>{element}</ThemeProvider>
      </UserProvider>
    </FirebaseContext.Provider>
  )