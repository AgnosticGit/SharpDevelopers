import React from 'react';
import { View, StyleSheet } from 'react-native'
import { Button } from '../../../common/components/Button';
import { CONSTANTS } from '../../../common/utils/constants'


export const Main = (props) => {
  return (
    <View style={styles.container}>
      <Button style={styles.buttonLogin} title={CONSTANTS.LOGIN} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  buttonLogin: {
    marginTop: 50
  }
})