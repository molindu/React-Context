// SettingsScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useSettingsContext } from './SettingsContext';

function SettingsScreen({ navigation }) {
  const { settings } = useSettingsContext();

  return (
    <View>
      <Text>Settings</Text>
      <Text>Theme: {settings.theme}</Text>
      <Text>Language: {settings.language}</Text>
      <Button
        title="Go to User Information"
        onPress={() => navigation.navigate('User')}
      />
    </View>
  );
}

export default SettingsScreen;
