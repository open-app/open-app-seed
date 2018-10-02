import React, { Component } from 'react'
import styled from 'styled-components'
import Status from './Status'
import Hamburger from './Menu/Hamburger'
import theme from '../utils/theme'

const Navbar = styled.View`
  width: 100%;
  height: 40px;
  display: flex;
  flex-flow: row no-wrap;
  flex-wrap: nowrap;
  align-items: center;
  align-content: flex-start;
  justify-content: flex-start;
  background: ${theme.colors.lightest};
  box-shadow: 1px 2px rgba(0,0,0,0.2);
`
const MenuContainer = styled.View`
  width: 30%;
`

const BackButton = styled.TouchableOpacity`
  padding: 0 30px;
  width: 45px;
`

const BackText = styled.Text`
  font-size: 36px;
  text-align: center;
`

const Header = (props) => {
  const { index, navigation } = props
  console.log(navigation)
  return (
    <Navbar>
      {(index === 0) &&  <Hamburger {...props} />}
      {(index > 0) &&  <BackButton onPress={() => navigation.goBack(0)}><BackText>&#8249;</BackText></BackButton>}
      <Status {...props} />
    </Navbar>
  )
}

export default Header