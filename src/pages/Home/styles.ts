import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import Fab from '@material-ui/core/Fab'

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;
`
export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 400px;
  overflow: hidden;
  border-radius: 8px;
`
export const Image = styled.img`
  min-height: 100%;
  vertical-align: top;
  border-radius: 8px;
`
export const ActionDiv = styled.div`
  display: flex;
  margin-top: 16px;
  justify-content: space-around;
`
export const NextButton = styled(Fab)` 
`
export const LoveButton = styled(Fab)`
  background: #20232a !important;
  color: #61dafb !important;
`
export const StarButton = styled(Fab)` 
  background: #fadb14 !important;
  color: white !important;
`
