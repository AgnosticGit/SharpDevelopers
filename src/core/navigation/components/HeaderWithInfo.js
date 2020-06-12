import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Colors } from '../../../common/theme/Colors';

export const HeaderWithInfo = (userInfo, balance) => {
  return {
    headerRight: () =>
      <Text style={styles.balanceTitle}>
        Balance:{'\n'}{balance} PW
      </Text>,
    headerTitle: userInfo.name,
    headerTitleAlign: 'center',
    headerTintColor: Colors.white,
    headerStyle: {
      backgroundColor: Colors.orange,
    },
  }
}

const styles = StyleSheet.create({
  balanceTitle: {
    textAlign: 'center',
    color: Colors.white,
    paddingRight: 15,
  }
})
