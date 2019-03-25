import * as React from 'react'

interface IProps {

}
interface IState {

}

class Child extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
  }

  public render() {
    return (
      <div className="change">
        Child
      </div>
    )
  }
}

export default Child
