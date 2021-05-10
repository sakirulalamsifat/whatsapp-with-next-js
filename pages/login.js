import styled from 'styled-components'
import Head from 'next/head'
import { Button } from '@material-ui/core'
import { auth, provider } from '../firebase'

function Login() {

    const signIn=()=>{
        auth.signInWithPopup(provider).catch(alert)
    }
  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>

      <LogoContainer>
        <Logo src='https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c543.png' />
        <Button onClick={signIn} variant='outlined'>Sign in with Google</Button>
      </LogoContainer>
    </Container>
  )
}

export default Login

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`

const LogoContainer = styled.div`
  padding: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  box-shadow: -1px 3px 5px 3px rgba(0, 0, 0, 0.72);
`

const Logo = styled.img`
  height: 200px;
  width: 200px;
  margin-botton: 50px;
`
