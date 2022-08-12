import React from "react"
import styled from "styled-components"

interface Props {
  outlined?: boolean
}

export default styled.button<Props>`
  background-color: ${props => props.outlined ? "transparent" : "var(--twitter)"};
  color: ${props => props.outlined ? "var(--twitter)" : "var(--gray)"};
  border: ${props => props.outlined ? "1px solid var(--twitter)" : "none"};
  padding: 16px;
  border-radius: 25px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  outline: 0;

  &:hover {
    background: ${props => props.outlined ? "var(--twitter-dark-hover)" : "var(--twitter-light-hover)"};
  }
`
