import * as React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import { H1 } from '../Heading'

const Outer = styled.header`
  background: ${props => props.theme.header.backgroundColor};
  margin-bottom: 1.45rem;
  margin: 0 auto;
  padding: var(--space-4) var(--size-gutter);
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    color: black;
}
`

const Header = ({ siteTitle }) => (
  <Outer>
    <H1>
      <StyledLink to="/">
        {siteTitle}
      </StyledLink>
    </H1>
  </Outer>
)

Header.protoTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export  { Header }

