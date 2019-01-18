import StockScreen from './StockScreen'
import FabricScreen from './FabricScreen'
import LoginScreen from './LoginScreen';

import {
  createStackNavigator,
  createDrawerNavigator,
  createMaterialTopTabNavigator
} from 'react-navigation';

const StackNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Estoque: StockScreen
  }
);

const TabNavigator = createMaterialTopTabNavigator(
  {
    Estoque: StockScreen,
    Tecidos: FabricScreen
  },
  {
    tabBarOptions: {
      activeTintColor: '#FFF',
      inactiveTintColor: '#CCC',
      tabStyle: {
        backgroundColor: 'green'
      },
      labelStyle: {
        fontSize: 30,
        fontFamily: 'Caviar Dreams',
        fontWeight: 'bold'
      }
    }
  });

const DrawerNavigator = createDrawerNavigator(
  {
    Estoque: StockScreen,
    Tecidos: FabricScreen
  }
);

export default { StackNavigator, TabNavigator, DrawerNavigator };
