import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { MainActionsAsync } from '../redux/MainActionsAsync';
import { FlatList } from 'react-native-gesture-handler';
import { TransactionItem } from '../components/TransactionItem';


export const Transactions = () => {
  const dispatch = useDispatch();
  const mainStore = useSelector(state => state.main);

  useEffect(() => {
    dispatch(MainActionsAsync.getLoggedUserTransactions())
  }, [])

  const renderItem = ({ item }) => (
    <TransactionItem item={item} />
  )

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.list}
        renderItem={renderItem}
        data={mainStore.transactions}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    width: '100%'
  }
})