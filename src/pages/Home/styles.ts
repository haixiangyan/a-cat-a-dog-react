import styled from 'styled-components'
import Button from '@material-ui/core/Button'

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 400px;
`
export const ImageWrapper = styled.div`
  text-align: center;
  width: 100%;
`
export const Image = styled.img`
  text-align: center;
  width: 100%;
`
export const ActionDiv = styled.div`
  display: flex;
`
export const LoveButton = styled(Button)`
  flex-grow: 1;
  background: #20232a !important;
  color: #61dafb !important;
`
export const NextButton = styled(Button)` 
  flex-grow: 1;
  margin-left: 4px !important;
`
