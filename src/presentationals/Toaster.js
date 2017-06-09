import React from "react"
import styles from "./Toaster.css"

export default ({
  children,
  onCloseClick,
  onMouseEnter,
  onMouseLeave,
  onAnimationEnd,
  isBeingRemoved
}) => {
  const className = isBeingRemoved ? styles["toaster-remove"] : styles.toaster
  return (
    <div
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onAnimationEnd={onAnimationEnd}
    >
      <span className={styles["toaster-info"]}>&#9432;</span>
      <div className={styles["toaster-message"]}>{children}</div>
      <button className={styles["toaster-close"]} onClick={onCloseClick}>
        &times;
      </button>
    </div>
  )
}
