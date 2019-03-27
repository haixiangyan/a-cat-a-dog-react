import * as React from 'react'
// Material
import Icon from '@material-ui/core/Icon'
// Redux
import {IAxiosStore} from "../../store"
import {updateAxios} from "../../store/axios/actions"
import {connect} from "react-redux"
// Services
import imagesService from '../../services/images'
// Types
import {IHomeActionProps, IHomeProps, IHomeState, IHomeStoreProps} from "./index"
// Styles
import {Wrapper, ImageWrapper, Image, ActionDiv, LoveButton, NextButton, StarButton} from "./styles"

class Home extends React.Component<IHomeProps, IHomeState> {
  constructor(props: IHomeProps) {
    super(props);
    this.state = {
      images: []
    }
  }

  public async componentDidMount() {
    await this.props.updateAxios('CAT')

    const resources = await imagesService.getImages()
    this.setState({
      images: resources
    })
  }

  public render() {
    const {images} = this.state
    return (
      <Wrapper>
        {
          images.map(image =>
            <div key={image.id}>
              <ImageWrapper>
                <Image src={image.url} alt="Animal Image"/>
              </ImageWrapper>
              <ActionDiv>
                <LoveButton color="secondary">
                  <Icon>thumb_up</Icon>
                </LoveButton>
                <NextButton color="secondary">
                  <Icon>close</Icon>
                </NextButton>
                <StarButton color="default">
                  <Icon>star</Icon>
                </StarButton>
              </ActionDiv>
            </div>
          )
        }
      </Wrapper>
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
