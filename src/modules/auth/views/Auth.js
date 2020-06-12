import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from '../../../common/components/Button';
import { NavigationPages } from '../../../core/navigation/NavigationPages';
import { CONSTANTS } from '../../../common/utils/constants'

export const Auth = (props) => {

  function navigationController(route) {
    props.navigation.navigate(route);
  }

  return (
    <View style={styles.container}>
      <Button
        title={CONSTANTS.LOGIN}
        onPress={navigationController.bind('', NavigationPages.login)}
      />
      <Button
        title={CONSTANTS.SIGN_UP}
        style={styles.buttonSignUp}
        onPress={navigationController.bind('', NavigationPages.signUp)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  buttonSignUp: {
    marginTop: 10,
  }
})