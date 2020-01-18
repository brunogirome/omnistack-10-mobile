import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Main from './pages/Main'
import Profile from './pages/Profile'

const Routes = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions: {
                title: 'DevRadar'
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                title: 'Perfil no GitHub'
            }
        }
    }, {
        defaultNavigationOptions: {
            headerBackTitleVisible: false,
            headerTintColor: '#8af1ea',
            headerStyle: {
                backgroundColor: '#2a2d37',

            }
        }
    })
)

export default Routes