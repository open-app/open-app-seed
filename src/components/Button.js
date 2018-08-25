import React from 'react'
import styled from "styled-components"
import theme from '../utils/theme'

const ButtonWrapper = styled.TouchableOpacity`
  background-color: ${theme.colors.secondary};
  width: 150px;
  padding: 15px 20px;
  border-radius: 15px;
`

const Title = styled.Text`
  color: ${theme.colors.primary};
  text-align: center;
`

const Button = ({ title, onPress }) => <ButtonWrapper onPress={onPress}><Title>{title}</Title></ButtonWrapper>

export default Button
