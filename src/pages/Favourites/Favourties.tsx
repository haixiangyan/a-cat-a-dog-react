import * as React from 'react'
// Types
import {IFavouritesProps, IFavouritesState} from "./index"
import {IFavouritesElement} from "../../env"
// Material UI
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import ListSubheader from '@material-ui/core/ListSubheader'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'
// Services
import favouritesService from '../../services/faviourites'
import imagesService from '../../services/images'
// Custom components
import Header from '../../components/Header/Header'

class Favourites extends React.Component<IFavouritesProps, IFavouritesState> {
  constructor(props: IFavouritesProps) {
    super(props)
    this.state = {
      imagesWithFavourite: [],
      isOpenDialog: false,
      deletingFavouriteId: ''
    }
  }

  public async componentDidMount() {
    const favourites: Array<IFavouritesElement> = await favouritesService.getFavourites({sub_id: 'hai_test'})
    let imagesWithFavourite = []

    for (let i = 0; i < favourites.length; i++) {
      const image = await imagesService.getImageById(favourites[i].image_id)
      const imageWithFavourite = {...image, favourite: favourites[i]}
      imagesWithFavourite.push(imageWithFavourite)
    }
    this.setState({imagesWithFavourite})
  }

  private formatDate = (dateStr: string): string => {
    const date = new Date(dateStr)
    return `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()-2000}`
  }

  private deleteFavourite = async () => {
    const {deletingFavouriteId} = this.state
    // Remove locally
    const newImagesWithFavourite = this.state.imagesWithFavourite.filter(image => image.favourite.id !== deletingFavouriteId)
    this.setState({imagesWithFavourite: newImagesWithFavourite})
    this.closeDialog()
    // Send request to remove
    await favouritesService.deleteFavourite(deletingFavouriteId)
  }

  private closeDialog = () => {
    this.setState({isOpenDialog: false})
  }
  private openDialog = () => {
    this.setState({isOpenDialog: true})
  }
  private deletingFavourite = (favouriteId: string) => {
    this.openDialog()
    this.setState({deletingFavouriteId: favouriteId})
  }

  public render() {
    const {imagesWithFavourite, isOpenDialog} = this.state
    return (
      <div>
        <Header/>

        <GridList cellHeight={180}>
          <GridListTile key="Subheader" cols={2} style={{height: 'auto'}}>
            <ListSubheader component="div">All Your Favourite Images</ListSubheader>
          </GridListTile>
          {
            imagesWithFavourite.map(image => (
              <GridListTile key={image.id}>
                <img src={image.url} alt={image.id}/>
                <GridListTileBar title="" subtitle={this.formatDate(image.favourite.created_at)}
                                 actionIcon={
                                   <IconButton onClick={() => this.deletingFavourite(image.favourite.id)}>
                                     <Icon color="secondary">close</Icon>
                                   </IconButton>
                                 }/>
              </GridListTile>
            ))
          }
        </GridList>

        <Dialog open={isOpenDialog} onClose={this.closeDialog}>
          <DialogTitle>Sure to delete it?</DialogTitle>
          <DialogActions>
            <Button onClick={this.deleteFavourite} color="primary">
              Delete
            </Button>
            <Button onClick={this.closeDialog} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default Favourites
