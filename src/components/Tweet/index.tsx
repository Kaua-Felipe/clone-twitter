import React from "react"
import { 
  Container, 
  Retweeted, 
  RocketseatIcon, 
  Body, 
  Avatar, 
  Content, 
  Header, 
  Dot, 
  Description, 
  ImageContent, 
  Icons, 
  Status, 
  CommentIcon, 
  RetweetIcon, 
  LikeIcon, 
} from "./styles"

interface Props {
  totComments: number
  totRetweets: number
  totLikes: number
}

const Tweet: React.FC<Props> = ({ totComments, totRetweets, totLikes }) => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Você retuitou
      </Retweeted>
      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>Rocketseat</strong>
            <span>@rocketseat</span>
            <Dot />
            <time>27 de jun</time>
          </Header>
          <Description>Foguete não têm ré 🚀</Description>
          <ImageContent />
          <Icons>
            <Status>
              <CommentIcon />
              {totComments > 999 ? "+999" : totComments}
            </Status>
            <Status>
              <RetweetIcon />
              {totRetweets > 999 ? "+999" : totRetweets}
            </Status>
            <Status>
              <LikeIcon />
              {totLikes > 999 ? "+999" : totLikes}
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  )
}

export default Tweet
