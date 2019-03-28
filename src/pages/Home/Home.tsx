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
import {
  Wrapper,
  Header, UserButton, SettingButton,
  ImageWrapper, Image,
  ActionDiv, LoveButton, NextButton, StarButton
} from "./styles"
import {IImage} from "../../env"

class Home extends React.Component<IHomeProps, IHomeState> {
  constructor(props: IHomeProps) {
    super(props);
    this.state = {
      images: []
    }
  }

  public async componentDidMount() {
    await this.props.updateAxios('CAT')

    const imagesData: Array<IImage> = await imagesService.getImages()
    console.log(imagesData)
    this.setState({
      images: imagesData
    })
  }

  public render() {
    const {images} = this.state
    return (
      <Wrapper>
        {
          images.map(image =>
            <div key={image.id}>
              <Header>
                <UserButton >
                  <Icon>person</Icon>
                </UserButton>
                <span>🐱A🐶</span>
                <SettingButton >
                  <Icon>settings</Icon>
                </SettingButton>
              </Header>
              <ImageWrapper>
                <Image src={image.url} alt="Animal Image"/>
              </ImageWrapper>
              <ActionDiv>
                <LoveButton color="secondary">
                  <Icon>thumb_up</Icon>
                </LoveButton>
                <StarButton color="default">
                  <Icon>star</Icon>
                </StarButton>
                <NextButton color="secondary">
                  <Icon>close</Icon>
                </NextButton>
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
