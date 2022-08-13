import React from "react"
import { 
  Container, 
  TopSide, 
  Logo, 
  MenuButton, 
  HomeIcon, 
  BellIcon, 
  EmailIcon, 
  FavoriteIcon, 
  ProfileIcon, 
  BottomSide, 
  Avatar, 
  ProfileData, 
  ExitIcon 
} from "./styles"
import Button from "../Button"

const MenuBar: React.FC = () => {
  return (
    <Container>
      <TopSide>
        <Logo />
        <MenuButton>
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuButton>
        <MenuButton>
          <BellIcon />
          <span>Notificações</span>
        </MenuButton>
        <MenuButton>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButton>
        <MenuButton>
          <FavoriteIcon />
          <span>Favoritados</span>
        </MenuButton>
        <MenuButton>
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButton>

        <Button>
          <span>Tweetar</span>
        </Button>
      </TopSide>
      <BottomSide>
        <Avatar />
        <ProfileData>
          <strong>Kauã felipe</strong>
          <span>@kaua_felipe</span>
        </ProfileData>
        <ExitIcon />
      </BottomSide>
    </Container>
  )
}

export default MenuBar
