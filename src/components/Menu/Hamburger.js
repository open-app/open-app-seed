import React, { Component } from "react"
import styled from 'styled-components'
import theme from '../../utils/theme'

const Button = styled.TouchableOpacity`
  width: 45px;
  padding: 0 30px;
`

const Slash = styled.View`
  width: 25px;
  height: 2px;
  background-color: ${theme.colors.dark};
  margin: 2px 0;
`

export default (props) => <Button onPress={props.navigation.toggleDrawer}>
  <Slash />
  <Slash />
  <Slash />
</Button>
