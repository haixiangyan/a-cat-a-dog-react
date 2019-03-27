import * as React from 'react'
// Material
import Button from '@material-ui/core/Button'
// Redux
import {IAxiosStore} from "../../store"
import {updateAxios} from "../../store/axios/actions"
import {connect} from "react-redux"
// Services
import imagesService from '../../services/images'
// Types
import {IHomeActionProps, IHomeProps, IHomeState, IHomeStoreProps} from "./index"
// Styles
import classes from  './classes'

class Home extends React.Component<IHomeProps, IHomeState> {
  constructor(props: IHomeProps) {
    super(props);
    this.state = {
      images: []
    }
  }

  public async componentDidMount() {
    await this.props.updateAxios('DOG')

    const resources = await imagesService.getImages()
    this.setState({
      images: resources
    })
  }

  public render() {
    const {images} = this.state
    return (
      <div>
        {
          images.map(image =>
            <div key={image.id}>
              <img src={image.url} alt="Animal Image"/>
              <div>
                <Button variant="contained" color="secondary">
                  LOVE
                </Button>
                <Button variant="contained" color="primary">
                  PASS
                </Button>
              </div>
            </div>
          )
        }
      </div>
    )
  }
}

const mapStateToProps = (state: IAxiosStore): IHomeStoreProps => ({
  axios: state.axios
})
const mapDispatchToProps: IHomeActionProps = {
  updateAxios
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
