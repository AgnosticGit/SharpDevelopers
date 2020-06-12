import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { MainActionsAsync } from '../redux/MainActionsAsync';
import { FlatList } from 'react-native-gesture-handler';
import { Colors } from '../../../common/theme/Colors';


export const TransactionItem = React.memo(({ item }) =>
  <View style={styles.container}>
    <View>
      <Text>Date: {item.date}</Text>
      <Text>Name: {item.username}</Text>
    </View>
    <View style={{justifyContent: 'flex-end', alignItems: 'flex-end'}}>
      <Text>Sum: {item.amount} Balance: {item.balance}</Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  }
})