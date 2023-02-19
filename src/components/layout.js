import * as React from "react"
import { Link } from "gatsby"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (<>
      <h1 className="main-heading">
        <Link to="/">{title}</Link> 
      </h1>  by Skylar Liang
    </>)
  } else {
    header = (
      <>
        <Link className="header-link-home" to="/">
          {title}
        </Link>{" "}
      </>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>

      <hr style={{ color: "#3B4252" }} />
      <div className="contact-wrapper">
        <a href="https://github.com/SkylarLJY">
          <AiFillGithub className="contact" />
        </a>{" "}
        <a href="https://www.linkedin.com/in/skylar-liang/" className="contact">
          <AiFillLinkedin className="contact" />
        </a>
      </div>

      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
