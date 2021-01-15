import React from "react"
import ReactDOM from "react-dom"
import { AppContainer } from "react-hot-loader"
import configureStore, { history } from "./store/configureStore"
import Root from "./containers/Root"

require("typeface-roboto")
import "./styles/styles.scss"

const store = configureStore()

ReactDOM.render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById("app")
)

if (module.hot) {
  module.hot.accept("./containers/Root", () => {
    const NewRoot = require("./containers/Root").default
    ReactDOM.render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById("app")
    )
  })
}
