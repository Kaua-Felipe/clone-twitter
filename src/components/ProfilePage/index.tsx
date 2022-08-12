import React from "react"
import Feed from "../Feed"
import { 
  Container, 
  Banner, 
  Avatar, 
  ProfileData, 
  LocationIcon, 
  CakeIcon, 
  FollowAge, 
  EditButton 
} from "./styles"

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>
        <h1>Kauã Felipe</h1>
        <h2>@kaua_felipe</h2>
        <p>
          Atualmente vivendo e <a href="https://github.com/Kaua-Felipe">estudando!</a>
          {/* Desenvolvedor da <a href="https://rocketseat.com.br">@Rocketseat</a> */}
        </p>
        <ul>
          <li>
            <LocationIcon />
            Araçatuba-SP, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 26 de junho de 2004
          </li>
        </ul>
        <FollowAge>
          <span>
            seguindo <strong> 92</strong>
          </span>
          <span>
            <strong>672 </strong>seguidores 
          </span>
        </FollowAge>
      </ProfileData>
      <Feed />
    </Container>
  )
}

export default ProfilePage
