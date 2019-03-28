import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton'

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  color: #20232a;
  font-size: 1.2em;
`
export const UserButton = styled(IconButton)`

`
export const SettingButton = styled(IconButton)`
`
export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 510px;
  overflow: hidden;
  border-radius: 12px;
`
export const Image = styled.img`
  width: 100%;
  vertical-align: top;
  border-radius: 8px;
`
export const ActionDiv = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top: 1px solid #ddd;
`
export const VoteButton = styled(IconButton)`
`
export const UploadButton = styled(IconButton)`
  color: #61dafb !important;
`
export const FavouriteButton = styled(IconButton)` 
  color: #fadb14 !important;
`
export const AnalyzeButton = styled(IconButton)`
  color: #20232a !important;
`
export const NextButton = styled(IconButton)` 
`
