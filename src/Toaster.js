import Toaster from "./presentationals/Toaster"
import { connect } from "react-redux"
import {
  removeToaster,
  startRemoving,
  pauseAutomaticToasterRemoval,
  unpauseAutomaticToasterRemoval
} from "./actionCreators"

const mapDispatchToProps = (dispatch, ownProps) => ({
  onCloseClick: () => dispatch(startRemoving(ownProps.id, ownProps.timerId)),
  onMouseEnter:
    !ownProps.isBeingRemoved &&
      (() =>
        dispatch(pauseAutomaticToasterRemoval(ownProps.id, ownProps.timerId))),
  onMouseLeave:
    !ownProps.isBeingRemoved &&
      (() => dispatch(unpauseAutomaticToasterRemoval(ownProps.id))),
  onAnimationEnd:
    ownProps.isBeingRemoved &&
      (() => dispatch(removeToaster(ownProps.id, ownProps.timerId)))
})

export default connect(null, mapDispatchToProps)(Toaster)
