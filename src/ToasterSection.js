import React from "react"
import ToasterContainer from "./ToasterContainer"
import store from "./store"
import { Provider } from "react-redux"
import AddToastBox from "./AddToastBox"

export default () =>
  <Provider store={store}>
    <div>
      <AddToastBox />
      <ToasterContainer />
    </div>
  </Provider>
