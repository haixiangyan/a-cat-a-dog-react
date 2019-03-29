import * as React from 'react'
// Material
import Icon from '@material-ui/core/Icon'
// Redux
import {IStore} from "../../store"
import {connect} from "react-redux"
// Material UI
import {Snackbar} from "@material-ui/core"
// Services
import imagesService from '../../services/images'
import votesService from '../../services/votes'
import favouritesService from '../../services/faviourites'
// Types
import {IHomeActionProps, IHomeProps, IHomeState} from "./index"
// Styles
import {
  ActionDiv,
  AnalyzeButton,
  FavouriteButton,
  Image,
  ImageWrapper,
  NextButton,
  UploadButton,
  VoteButton,
  Wrapper
} from "./styles"
// Types
import {IImage} from "../../env"
import {AxiosResponse} from "axios"
// Custom components
import TransitionUp from "../../components/TransitionUp/TransitionUp"
import Header from '../../components/Header/Header'
import Analysis from "../../components/Analysis/Analysis"

class Home extends React.Component<IHomeProps, IHomeState> {
  constructor(props: IHomeProps) {
    super(props);
    this.state = {
      images: [],
      imageInput: React.createRef(),
      isOpenMsg: false,
      msg: '',
      isOpenAnalysis: false,
      imageAnalysis: []
    }
  }

  public async componentDidMount() {
    await this.updateImage()
  }

  private vote = async () => {
    await votesService.addVote({
      sub_id: 'hai_test',
      image_id: this.state.images[0].id,
      value: 1
    })
    this.setState({isOpenMsg: true, msg: 'Vote it'})
  }

  private onChangeImage = async () => {
    const {imageInput} = this.state
    if (!imageInput.current || !imageInput.current.files || imageInput.current.files.length === 0) {
      return
    }

    const data = new FormData();
    data.append('sub_id', 'hai_test');
    data.append('file', imageInput.current.files[0]);
    const response: AxiosResponse = await imagesService.uploadImage(data)
    // Error
    if (response.status.toString().startsWith('2')) {
      this.setState({isOpenMsg: true, msg: 'Upload successfully'})
    } else {
      this.setState({isOpenMsg: true, msg: response.data.message})
    }
  }

  private onCloseMsg = async () => {
    this.setState({isOpenMsg: false})
  }

  private updateImage = async () => {
    const images: Array<IImage> = await imagesService.getImages()
    this.setState({images})
  }

  private toggleAnalysisCollapse = async () => {
    await this.setState({isOpenAnalysis: !this.state.isOpenAnalysis})
    if (this.state.isOpenAnalysis) {
      await this.analyze()
      const wrapper = document.querySelector('#app-wrapper')
      wrapper && wrapper.scroll(0, 9999)
    }
  }

  private favourite = async () => {
    await favouritesService.addFavourite({
      sub_id: 'hai_test',
      image_id: this.state.images[0].id
    })
    this.setState({isOpenMsg: true, msg: 'Add to favourite'})
  }

  private analyze = async () => {
    const {images} = this.state
    if (images.length === 0) {
      return
    }
    const imageAnalysis = await imagesService.analyzeImage(this.state.images[0].id)
    this.setState({imageAnalysis})
  }

  public render() {
    const {images, imageInput, isOpenMsg, msg, isOpenAnalysis, imageAnalysis} = this.state
    return (
      <Wrapper id="home-wrapper">
        {
          images.length > 0 &&
          <div key={images[0].id}>
              <Header/>
              <ImageWrapper>
                  <Image src={images[0].url} alt="Animal Image"/>
              </ImageWrapper>
              <ActionDiv>
                  <VoteButton color="primary" onClick={this.vote}> <Icon fontSize="large">thumb_up</Icon> </VoteButton>
                  <input onChange={this.onChangeImage} accept="image/*" style={{display: 'none'}} id="new-file"
                         type="file" ref={imageInput}/>
                  <label htmlFor="new-file">
                      <UploadButton component="span"><Icon>cloud_upload</Icon></UploadButton>
                  </label>
                  <FavouriteButton onClick={this.favourite}> <Icon fontSize="large">star</Icon> </FavouriteButton>
                  <AnalyzeButton onClick={this.toggleAnalysisCollapse}><Icon>show_chart</Icon></AnalyzeButton>
                  <NextButton color="secondary" onClick={this.updateImage}> <Icon
                      fontSize="large">arrow_forward_ios</Icon> </NextButton>
              </ActionDiv>
            {
              isOpenAnalysis && images.length > 0 && imageAnalysis.length > 0 &&
              <Analysis imageAnalysis={imageAnalysis[0]}/>
            }
              <Snackbar open={isOpenMsg} TransitionComponent={TransitionUp} onClose={this.onCloseMsg} message={msg}/>
          </div>
        }
      </Wrapper>
    )
  }
}

const mapStateToProps = (state: IStore) => ({
  axios: state.axios,
  breeds: state.breeds,
  categories: state.categories
})
const mapDispatchToProps: IHomeActionProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
