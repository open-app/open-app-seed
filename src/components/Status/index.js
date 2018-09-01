import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'

import ProgressSubscription from './ProgressSubscription'
import WhoamiQuery from './WhoamiQuery'

const Wrapper = styled.View`
  display: flex;
  flex-flow: row no-wrap;
  align-items: center;
  padding: 0 20px;
`

const Circle = styled.View`
  background-color: ${props => props.color};
  width: ${props => props.size || '10px'};
  height: ${props => props.size || '10px'};
  border-radius: ${props => props.size/2 || '5px'};
  margin-right: 12px;
`

const Pulse = styled(Circle)`
box-shadow: 0 0 0 rgba(204,169,44, 0.4);
:hover {
  animation: none;
}
`

const Text = styled.Text`
  color: ${props => props.textColor || '#000'};
  font-size: 12;
`

const Button = ({ title, onPress }) => <ButtonWrapper onPress={onPress}><Title>{title}</Title></ButtonWrapper>

export default class extends Component {
  getColor = ({ data }) => {
    if (!data) {
      // start timeout of 3secs
      // if no return show message
    }
  }

  render () {
    console.log('KEYFRAMES', keyframes)
    return (
      <WhoamiQuery>
        {({ whoami, loadingWhoami, errorWhoami}) => (
          <ProgressSubscription>
            {({ dataProgress, loadingProgress, errorProgress}) => (
              <Wrapper>
                {!dataProgress && <Circle
                  color={whoami ? 'yellow' : 'red'}
                />}
                {dataProgress && <Pulse color="green" />}
                {(whoami && !dataProgress) ? null : <Text>Server is not running. Make suer you have App Hub open.</Text>}
                {errorWhoami && <Text>Server not running</Text>}
              </Wrapper>
            )}
          </ProgressSubscription>
        )}
      </WhoamiQuery>
    )
  }
}
