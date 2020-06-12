import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { View, StyleSheet } from 'react-native';
import { Item, Input } from 'native-base';
import { Button } from '../../../common/components/Button';
import { CONSTANTS } from '../../../common/utils/constants';
import { AuthActions } from '../redux/AuthActions';
import { AuthActionsAsync } from '../redux/AuthActionsAsync';
import { TextModal } from '../../../common/components/TextModal';


export const SignUp = () => {
  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [passwordConfirmation, setPasswordConfirmation] = useState()
  const dispatch = useDispatch()
  const authStore = useSelector(state => state.auth)

  function onConfirm() {
    if (
      password &&
      passwordConfirmation &&
      password === passwordConfirmation
    ) {
      dispatch(AuthActionsAsync.signUp({ username, email, password }))
    } else {
      dispatch(AuthActions.setErrors({ errors: ['Password mismatch'] }))
    }
  }

  return (
    <View style={styles.container}>
      <Item>
        <Input
          onChangeText={setUsername}
          placeholder={CONSTANTS.NAME} />
      </Item>
      <Item>
        <Input
          onChangeText={setEmail}
          placeholder={CONSTANTS.EMAIL}
        />
      </Item>
      <Item>
        <Input
          secureTextEntry={true}
          autoCorrect={false}
          onChangeText={setPassword}
          placeholder={CONSTANTS.PASSWORD}
        />
      </Item>
      <Item>
        <Input
          secureTextEntry={true}
          autoCorrect={false}
          onChangeText={setPasswordConfirmation}
          placeholder={CONSTANTS.PASSWORD_CONFIRMATION}
        />
      </Item>
      <View style={styles.errorsContainer}>
        <TextModal errors={authStore.errors} />
      </View>
      <Button
        isLoading={authStore.isLoading}
        onPress={onConfirm}
        title={CONSTANTS.CONFIRM}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  errorsContainer: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
})