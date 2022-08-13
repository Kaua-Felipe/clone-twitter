import React from "react"
import StickyBox from "react-sticky-box"
import List from "../List"
import News from "../News"
import FollowSuggestion from "../FollowSuggestion"
import { 
  Container, 
  SearchWrapper, 
  SearchInput, 
  SearchIcon, 
  Body 
} from "./styles"

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>
      <StickyBox>
        <Body>
          <List 
            title="Talvez você curta" 
            elements={[
              <FollowSuggestion name="Luiz Batanero" nickname="@luizbatanero" />, 
              <FollowSuggestion name="Luke Morales" nickname="@lukemorales" />, 
              <FollowSuggestion name="Camila Magalhães" nickname="@camilamgl" />
            ]} 
          />
          <List 
            title="Talvez você curta" 
            elements={[
              <News />, 
              <News />, 
              <News />, 
              <News />
            ]} 
          />
          <List 
            title="Talvez você curta" 
            elements={[
              <News />, 
              <News />, 
              <News />, 
              <News />
            ]} 
          />
          <List 
            title="Talvez você curta" 
            elements={[
              <News />, 
              <News />, 
              <News />, 
              <News />
            ]} 
          />
          <List 
            title="Talvez você curta" 
            elements={[
              <News />, 
              <News />, 
              <News />, 
              <News />
            ]} 
          />
          <List 
            title="Talvez você curta" 
            elements={[
              <News />, 
              <News />, 
              <News />, 
              <News />
            ]} 
          />
          <List 
            title="Talvez você curta" 
            elements={[
              <News />, 
              <News />, 
              <News />, 
              <News />
            ]} 
          />
          <List 
            title="Talvez você curta" 
            elements={[
              <News />, 
              <News />, 
              <News />, 
              <News />
            ]} 
          />
          <List 
            title="Talvez você curta" 
            elements={[
              <News />, 
              <News />, 
              <News />, 
              <News />
            ]} 
          />
          <List 
            title="Talvez você curta" 
            elements={[
              <News />, 
              <News />, 
              <News />, 
              <News />
            ]} 
          />
        </Body>
      </StickyBox>
    </Container>
  )
}

export default SideBar
