import React from 'react'
import Styles from "./Heading.module.css"

function Heading() {
  return (
    <h1 className={`${Styles["heading"]}`}>TODO LIST</h1>
  )
}

export default Heading