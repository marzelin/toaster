import React, { Component } from "react"
import logo from "./logo.svg"
import styles from "./App.css"
import ToasterSection from "./ToasterSection"

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <div className={styles["App-header"]}>
          <img src={logo} className={styles["App-logo"]} alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ToasterSection />
      </div>
    )
  }
}

export default App
