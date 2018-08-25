import { createStackNavigator } from 'react-navigation'
import Provider from 'open-app-provider'
import theme from './utils/theme'
import Home from './screens/Home'
import Details from './screens/Details'
import i18n from './utils/i18n';

const wrapped = (CMP) => Provider(CMP, theme, i18n)

export default createStackNavigator(
  {
    Home: wrapped(Home),
    Details: wrapped(Details),
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: theme.colors.secondary,
      },
      headerTintColor: theme.colors.lightest,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
)