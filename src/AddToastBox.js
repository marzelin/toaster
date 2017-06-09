import AddToastBox from "./presentationals/AddToastBox"
import { connect } from "react-redux"
import { addToaster } from "./actionCreators"

const onSubmit = message => {
  const action = addToaster(message)
  return action
}

const mapDispatchToProps = {
  onSubmit
}

export default connect(null, mapDispatchToProps)(AddToastBox)
