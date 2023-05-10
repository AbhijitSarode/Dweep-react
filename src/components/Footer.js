import React from 'react'

function Footer(props) {
  let { leftLinks, rightLinks } = props
  return (
    <footer>
        <ul>{leftLinks.map((link, index) => <li key={index}>{link}</li>)}</ul>
        <ul>{rightLinks.map((link, index) => <li key={index}>{link}</li>)}</ul>
    </footer>
  )
}

export default Footer