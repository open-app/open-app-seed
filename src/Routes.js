import React from 'react'
import { createStackNavigator, createDrawerNavigator, withNavigation } from 'react-navigation'
import wrapper, { Provider } from 'open-app-provider'
import Home from './screens/Home'
import Details from './screens/Details'
import Header from './components/Header'

import i18n from './utils/i18n'
import theme from './utils/theme'

const wrapped = (CMP) => wrapper(CMP, theme, i18n)

const MainScreenNavigator = createStackNavigator(
  {
    Home: wrapped(Home),
    Details: wrapped(Details),
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: "red",
      },
      headerTintColor: theme.colors.lightest,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      header: (headerProps) => {
        return <Provider theme={theme} i18n={i18n}>
          <Header {...headerProps} {...this.props} />
        </Provider>
      }
    },
  }
)

const Drawer = createDrawerNavigator(
  {
    Main: { screen: MainScreenNavigator }
  },
  {
    // contentComponent: wrapped(Menu),
    drawerWidth: 200
  }
)

export default Drawer
