import React from "react"
import styles from "./ToasterContainer.css"

export default props => {
  const { children, ...childlessProps } = props
  return (
    <div className={styles["toaster-container"]} {...childlessProps}>
      {children}
    </div>
  )
}
