import React from 'react'
import Main from "../Main"
import { Container, Wrapper } from './styles'

const Layout: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        {/* <MenuBar /> */}
        <Main />
        {/* <SideBar /> */}
      </Wrapper>
    </Container>
  )
}

export default Layout
