import React, { Component } from 'react'
import { Platform, ActivityIndicator } from 'react-native'
import gql from "graphql-tag"
import { Query } from "react-apollo"
import styled from "styled-components"
import Button from '../components/Button'

const Text = styled.Text`
  color: ${props => props.theme.colors.primary};
`

const Title = styled.Text`
  color: ${props => props.theme.colors.secondary};
  font-size: 24px;
  padding-bottom: 15px;
`

const View = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.lightest};
`

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
  dom: 'Is there a way to reload with the dom?'  
})

const WHOAMI = gql`
  query Query {
    whoami
  }
`

export default class Home extends Component {
  render() {
    const { t, i18n } = this.props
    return (
      <View>
          <Title>{t('home:title')}</Title>
          <Query query={WHOAMI}>
            {({ loading, error, data }) => {
              if (error) return <h1>Error</h1>
              if (loading || !data) return <ActivityIndicator />;

              return <Text>{data.whoami}</Text>
            }}
          </Query>

        <Button
          title='Change page'
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Text>{instructions}</Text>
        <Button
          title='PT'
          onPress={() => { i18n.changeLanguage('pt') }}
        />
      </View>
    )
  }
}