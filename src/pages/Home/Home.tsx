import * as React from 'react'
// Material
import Icon from '@material-ui/core/Icon'
import Slide from '@material-ui/core/Slide'
// Redux
import {IStore} from "../../store"
import {connect} from "react-redux"
// Services
import imagesService from '../../services/images'
import votesService from '../../services/votes'
import favouritesService from '../../services/faviourites'
import breedsService from '../../services/breeds'
import categoriesService from '../../services/categories'
import sourcesService from '../../services/sources'
// Types
import {IHomeActionProps, IHomeProps, IHomeState} from "./index"
// Styles
import {
  Wrapper,
  Header, UserButton, SettingButton,
  ImageWrapper, Image,
  ActionDiv, VoteButton, NextButton, FavouriteButton, UploadButton, AnalyzeButton
} from "./styles"
import {
  ICategory,
  IFavourite,
  IFavouritesElement,
  IImage,
  IImageAnalysis,
  ISource,
  IVote,
  IVotesElement
} from "../../env"
import {AxiosResponse} from "axios"
import {Snackbar} from "@material-ui/core"
import TransitionUp from "../../components/TransitionUp"

class Home extends React.Component<IHomeProps, IHomeState> {
  constructor(props: IHomeProps) {
    super(props);
    this.state = {
      images: [],
      imageInput: React.createRef(),
      isOpenMsg: false,
      msg: ''
    }
  }

  public async componentDidMount() {
    await this.updateImage()
  }

  private test = async () => {
    console.log(this.props.breeds, 'breeds')
    console.log(this.props.categories, 'categories')
    console.log(this.state.images[0])
    const analysis: Array<IImageAnalysis> = await imagesService.analyzeImage(this.state.images[0].id)
    console.log(analysis, 'a')
    const votes: Array<IVotesElement> = await votesService.getVotes({
      sub_id: 'hai_test'
    })
    console.log(votes, 'vs')
    const vote: IVote = await votesService.getVoteById(votes[0].id)
    console.log(vote, 'v')
    const favourites: Array<IFavouritesElement> = await favouritesService.getFavourites({
      sub_id: 'hai_test'
    })
    console.log(favourites, 'fs')
    const favourite: IFavourite = await favouritesService.getFavouriteById(favourites[0].id)
    console.log(favourite, 'f')
    const breeds = await breedsService.getBreeds({
      limit: 2,
      page: 1
    })
    console.log(breeds, 'bs')
    const breed = await breedsService.getBreedById(breeds[0].id)
    console.log(breed, 'b')
    const categories: Array<ICategory> = await categoriesService.getCategories()
    console.log(categories, 'cs')
    const sources: Array<ISource> = await sourcesService.getSources({
      limit: 2,
      page: 1
    })
    console.log(sources, 'ss')
  }

  private vote = async () => {
    await votesService.addVote({
      sub_id: 'hai_test',
      image_id: this.state.images[0].id,
      value: 1
    })
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
    }
    else {
      this.setState({isOpenMsg: true, msg: response.data.message})
    }
  }

  private onCloseMsg = async () => {
    this.setState({isOpenMsg: false})
  }

  private updateImage = async () => {
    const images: Array<IImage> = await imagesService.getImages()
    this.setState({
      images
    })
  }

  private favourite = async () => {
    await favouritesService.addFavourite({
      sub_id: 'hai_test',
      image_id: this.state.images[0].id
    })
  }

  public render() {
    const {images, imageInput, isOpenMsg, msg} = this.state
    return (
      <Wrapper>
        {
          images.map(image =>
            <div key={image.id}>
              <Header>
                <UserButton > <Icon>person</Icon> </UserButton>
                <span>🐱A🐶</span>
                <SettingButton > <Icon>settings</Icon> </SettingButton>
              </Header>
              <ImageWrapper>
                <Image src={image.url} alt="Animal Image"/>
              </ImageWrapper>
              <ActionDiv>
                <VoteButton color="primary" onClick={this.vote}> <Icon fontSize="large">thumb_up</Icon> </VoteButton>
                <input onChange={this.onChangeImage} accept="image/*" style={{display: 'none'}} id="new-file" type="file" ref={imageInput} />
                <label htmlFor="new-file">
                  <UploadButton component="span"><Icon>cloud_upload</Icon></UploadButton>
                </label>
                <FavouriteButton onClick={this.favourite}> <Icon fontSize="large">star</Icon> </FavouriteButton>
                <AnalyzeButton><Icon>show_chart</Icon></AnalyzeButton>
                <NextButton color="secondary" onClick={this.updateImage}> <Icon fontSize="large">arrow_forward_ios</Icon> </NextButton>
              </ActionDiv>

              <Snackbar open={isOpenMsg} TransitionComponent={TransitionUp} onClose={this.onCloseMsg} message={msg}/>
            </div>
          )
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
const mapDispatchToProps: IHomeActionProps = {
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
