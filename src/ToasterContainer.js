import ToasterContainer from "./presentationals/ToasterContainer"
import Toaster from "./Toaster"
import { connect } from "react-redux"
import React from "react"

const mapStateToProps = state => ({
  toasters: state
})

export default connect(mapStateToProps)(({ toasters }) =>
  <ToasterContainer>
    {toasters.map(toaster => {
      const { message, ...rest } = toaster
      return (
        <Toaster {...rest} key={rest.id}>
          {message}
        </Toaster>
      )
    })}
  </ToasterContainer>
)
