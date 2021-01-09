import "@testing-library/jest-dom/extend-expect"
import * as Gatsby from "gatsby"

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
useStaticQuery.mockImplementation(() => ({
  site: {
    siteMetadata: {
      siteTitle: 'Nicholas Gourley'
    },
  },
}));