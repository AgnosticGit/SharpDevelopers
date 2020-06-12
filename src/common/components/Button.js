import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Button as NativeButton, Text } from 'native-base';

export const Button = ({ onPress, title, style, isLoading }) => (
  <NativeButton
    disabled={isLoading ? true : false}
    style={[styles.container, style]}
    onPress={onPress}
  >
    <Text>{isLoading ? 'Loading...' : title}</Text>
  </NativeButton>
)

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})
