import React, { Component } from "react"

/*export default ({
  onSubmit,
  inputName
}) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name={inputName}/>
      <button type="submit">Add Toaster</button>
    </form>
  )
}*/

export default class extends Component {
  state = {
    message: ""
  }
  onSubmit = event => {
    event.preventDefault()
    event.stopPropagation()
    this.props.onSubmit(this.state.message)
    this.setState({
      message: ""
    })
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          value={this.state.message}
          onChange={e =>
            this.setState({
              message: e.currentTarget.value
            })}
        />
        <button type="submit" disabled={!this.state.message}>
          Add Toaster
        </button>
      </form>
    )
  }
}
