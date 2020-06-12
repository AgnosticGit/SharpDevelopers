import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, StyleSheet, FlatList, Text, ScrollView } from 'react-native';
import { Item, Input } from 'native-base';
import { Button } from '../../../common/components/Button';
import { CONSTANTS } from '../../../common/utils/constants'
import { AuthActions } from '../../auth/redux/AuthActions';
import { AuthActionsAsync } from '../../auth/redux/AuthActionsAsync';
import { MainActionsAsync } from '../redux/MainActionsAsync';
import { UserItem } from '../components/UserItem';
import { Colors } from '../../../common/theme/Colors';
import { NavigationPages } from '../../../core/navigation/NavigationPages';


export const Main = (props) => {
  const dispatch = useDispatch();
  const mainStore = useSelector(state => state.main);
  const [user, setUser] = useState('');
  const [showListState, setShowListState] = useState(false);
  const [showSumState, setShowSumState] = useState(false);
  const [sum, setSum] = useState('');

  useEffect(() => {
    dispatch(AuthActionsAsync.getUserInfo());
  }, [])

  function onSearchUser(text) {
    setUser({ name: text });
    dispatch(MainActionsAsync.getFilteredUserList(text));
  }

  function onSelectUser(user) {
    setUser(user);
    setSum('');
    setShowListState(false)
    setShowSumState(true)
  }

  function onFocusInput() {
    setUser('');
    setShowListState(true)
    setShowSumState(false)
  }

  function onSetSum(text) {
    text = text.replace(/\D/g, '')
    setSum(text)
  }

  function onSend() {
    dispatch(MainActionsAsync.sendPW({ name: user.name, amount: sum }))
  }

  function onPressTransactions() {
    props.navigation.navigate(NavigationPages.transactions)
  }

  function viewController() {
    if (showListState) {
      return (
        <FlatList
          contentContainerStyle={styles.list}
          renderItem={renderItem}
          data={mainStore.listOfUsers}
          keyExtractor={(item, index) => index.toString()}
        />
      )
    } else if (showSumState) {
      return (
        <View style={styles.sumInput}>
          <Item regular >
            <Input
              placeholder='Sum'
              onChangeText={onSetSum}
              keyboardType={'number-pad'}
              value={sum}
            />
          </Item>
          <View style={styles.balanceWarningContainer}>
            <Text style={styles.balanceWarningTitle}>
              {sum > mainStore.balance ? 'Not enough PW' : null}
            </Text>
          </View>
          <Button
            isLoading={mainStore.isLoading}
            onPress={onSend}
            disabled={sum > mainStore.balance || !sum}
            title={CONSTANTS.SEND}
          />
        </View>
      )
    } else {
      return null
    }
  }

  const renderItem = ({ item }) => (
    <UserItem onPress={onSelectUser} item={item} />
  )

  return (
    <View style={styles.container}>
      <ScrollView>
        <Item>
          <Input
            onFocus={onFocusInput}
            onChangeText={onSearchUser}
            placeholder={CONSTANTS.FIND_USER}
            value={user.name}
          />
        </Item>
        {viewController()}
      </ScrollView>
      <View style={styles.buttonsContainer}>
        <Button
          onPress={onPressTransactions}
          title={CONSTANTS.TRANSACTIONS}
        />
        <Button
          style={styles.buttonLogin}
          onPress={() => dispatch(AuthActions.logOut())}
          title={CONSTANTS.LOGOUT}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  list: {
    paddingTop: 20,
    paddingBottom: 100,
  },
  sumInput: {
    marginTop: 30,
  },
  balanceWarningContainer: {
    height: 30,
    justifyContent: 'center',
  },
  balanceWarningTitle: {
    color: Colors.red,
  },
  buttonsContainer: {
    position: 'absolute',
    width: '100%',
    alignSelf: 'center',
    bottom: 30,
  },
  buttonLogin: {
    marginTop: 15,
  }
})