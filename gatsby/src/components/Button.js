import React from "react"
import { Link } from "gatsby"

export default function Button({
  to,
  href,
  version = "pomodoro",
  label,
  children,
  onClick,
  ...props
}) {
  const buttonStyle = `btn --${version}`
  return (
    <>
      {to ? (
        <Link to={to} className={buttonStyle}>
          {children || label}
        </Link>
      ) : href ? (
        <a target="_blank" rel="noreferrer" href={href} className={buttonStyle}>
          {children || label}
        </a>
      ) : (
        <button onClick={onClick} type="button" className={buttonStyle}>
          {children || label}
        </button>
      )}
    </>
  )
}
