import {AppRegistry} from 'react-native';
import Navigator from './src';
import {name as appName} from './app.json';

const App = Navigator.TabNavigator;

AppRegistry.registerComponent(appName, () => App);
