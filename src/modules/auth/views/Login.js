import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { Item, Input } from 'native-base';
import { CONSTANTS } from '../../../common/utils/constants';
import { Button } from '../../../common/components/Button';
import { AuthActionsAsync } from '../redux/AuthActionsAsync';
import { TextModal } from '../../../common/components/TextModal';


export const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const authStore = useSelector(state => state.auth);

  async function onLogin() {
    await dispatch(AuthActionsAsync.login({ email, password }));
  }

  return (
    <View style={styles.container}>
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
      <View style={styles.errorsContainer}>
        <TextModal errors={authStore.errors} />
      </View>
      <Button onPress={onLogin} title={CONSTANTS.LOGIN} />
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