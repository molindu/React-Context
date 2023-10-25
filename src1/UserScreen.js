// UserScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useUserContext } from './UserContext';

function UserScreen({ navigation }) {
  const { user } = useUserContext();

  return (
    <View>
      <Text>User Information</Text>
      <Text>Name: {user.name}</Text>
      <Text>Email: {user.email}</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}

export default UserScreen;
