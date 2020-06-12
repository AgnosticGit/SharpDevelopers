import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Colors } from '../../../common/theme/Colors';


export const UserItem = React.memo(({ item, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress.bind('', item)}>
    <Text style={styles.title}>{item.name}</Text>
  </TouchableOpacity>
))

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
  }
})