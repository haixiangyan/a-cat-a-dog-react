import styled from 'styled-components'
import Button from '@material-ui/core/Button'

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  h3 {
    text-align: center;
  }
`
export const Avatar = styled.img`
  display: block;
  text-align: center;
  margin: 0 auto;
  width: 180px;
`
export const LoginButton = styled(Button)`
  width: 100%;
`
