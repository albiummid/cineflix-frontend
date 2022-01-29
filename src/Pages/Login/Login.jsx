import { Button, Input, Menu } from 'antd'
import { useAuth } from '../../Context/useAuth'
import PageWrapper from '../../layout/PageWrapper'
import banner from '../../assets/images/relax.png'
import styled from 'styled-components'

export default function Login() {
  const auth = useAuth()
  return (
    <PageWrapper noFooter={true} noNav={true} title='Please Login '>
      <LoginContainer>
        <img src={banner} alt='' />
        <div>
          <h1>Hola !!! We are very pleased to see you back !</h1>
        </div>
      </LoginContainer>
    </PageWrapper>
  )
}

const LoginContainer = styled.div`
  /* margin-inline: auto; */
  margin: 25%;
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 10px 30px gray;
  padding: 5px;
  border-radius: 10px 0 10px 0;
  div {
  }
  img {
    width: fit-content;
  }
`
