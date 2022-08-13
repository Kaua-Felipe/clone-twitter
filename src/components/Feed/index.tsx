import React from "react"
import Tweet from "../Tweet"
import { Container, Tab, Tweets } from "./styles"

const Feed: React.FC = () => {
  return (
    <Container>
      <Tab>Tweets</Tab>
      <Tweets>
      <Tweet totComments={20} totRetweets={10} totLikes={100} />
        <Tweet totComments={17} totRetweets={90} totLikes={1290} />
        <Tweet totComments={290} totRetweets={167} totLikes={90} />
        <Tweet totComments={8} totRetweets={19} totLikes={19} />
        <Tweet totComments={4902} totRetweets={745} totLikes={231} />
      </Tweets>
    </Container>
  )
}

export default Feed
