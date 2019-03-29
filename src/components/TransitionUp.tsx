import * as React from 'react'
import {Slide} from "@material-ui/core"

const TransitionUp: React.FunctionComponent = (props) => {
  return <Slide {...props} direction="up" />;
}

export default TransitionUp
