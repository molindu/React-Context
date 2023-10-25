import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { UserContextProvider } from './UserContext';
import { SettingsContextProvider } from './SettingsContext';
import UserScreen from './UserScreen';
import SettingsScreen from './SettingsScreen';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <UserContextProvider>
      <SettingsContextProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="User">
            <Stack.Screen name="User" component={UserScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SettingsContextProvider>
    </UserContextProvider>
  );
}

export default AppNavigator;
