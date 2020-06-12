import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Button as NativeButton, Text } from 'native-base';

export const Button = React.memo(({ onPress, title, style, isLoading, disabled }) => (
  <NativeButton
    disabled={isLoading || disabled ? true : false}
    style={[styles.container, style]}
    onPress={onPress}
  >
    <Text>{isLoading ? 'Loading...' : title}</Text>
  </NativeButton>
))

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})
