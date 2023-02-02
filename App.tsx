import 'react-native-gesture-handler';
import * as React from 'react';
import{Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';


const App = () => {
  return (
    <NavigationContainer>
        <StackNavigator />
    </NavigationContainer>
  );
};

export default App;