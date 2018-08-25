import React, { Component } from 'react'
import { Platform } from 'react-native'
import styled from "styled-components"
import Button from '../components/Button'

const Text = styled.Text`
  color: ${props => props.theme.colors.primary};
`
const View = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.lightest};
`

export default class Details extends Component {
  render() {
    const { t } = this.props
    return (
      <View>
        <Text>{t('details:title')}</Text>
        <Button
          title="Go home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    )
  }
}