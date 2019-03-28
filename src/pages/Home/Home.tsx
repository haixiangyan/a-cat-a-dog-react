import * as React from 'react'
// Material
import Icon from '@material-ui/core/Icon'
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
  ActionDiv, LoveButton, NextButton, StarButton, UploadButton, AnalyzeButton
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

class Home extends React.Component<IHomeProps, IHomeState> {
  constructor(props: IHomeProps) {
    super(props);
    this.state = {
      images: []
    }
  }

  public async componentDidMount() {
    await this.updateImage()
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

  private vote = async () => {
    await votesService.addVote({
      sub_id: 'hai_test',
      image_id: this.state.images[0].id,
      value: 1
    })
  }

  public render() {
    const {images} = this.state
    console.log(this.props.breeds)
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
                <LoveButton color="primary" onClick={this.vote}> <Icon fontSize="large">thumb_up</Icon> </LoveButton>
                <UploadButton><Icon>cloud_upload</Icon></UploadButton>
                <StarButton onClick={this.favourite}> <Icon fontSize="large">star</Icon> </StarButton>
                <AnalyzeButton><Icon>show_chart</Icon></AnalyzeButton>
                <NextButton color="secondary" onClick={this.updateImage}> <Icon fontSize="large">arrow_forward_ios</Icon> </NextButton>
              </ActionDiv>
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
