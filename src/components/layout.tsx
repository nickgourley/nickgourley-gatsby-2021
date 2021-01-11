/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import React, { createContext, FC, ReactNode, useState } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import ThemeContext from "../context/ThemeContext";
import FirebaseContext from "../components/Firebase";
import UserContext from "../context/UserContext";
import Header from "./header";
import "./layout.css";
import "./test.css";

interface HeaderData {
  site: {
    siteMetadata: {
      title: string;
    }
  }
};

const Layout = ({children}) => {

  const data: HeaderData = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
  <UserContext.Consumer>
    {values => (
      <ThemeContext.Consumer>
        {themeContext => (
          <div className={themeContext.dark ? 'dark' : 'light'}>
            <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
            <div
              style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `0 1.0875rem 1.45rem`,
              }}
            >
              <p onClick={() => {values.setUser({ name: "nick" })}}>test</p>
              {values.user && <p>You are logged in as: {values.user.email}</p>}
              <main>{children}</main>
              <button onClick={themeContext.toggleDark}></button>
              <footer style={{
                marginTop: `2rem`
              }}>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.com">Gatsby</a>
              </footer>
            </div>
          </div>
        )}
      </ThemeContext.Consumer>
    )}
  </UserContext.Consumer>
    
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
