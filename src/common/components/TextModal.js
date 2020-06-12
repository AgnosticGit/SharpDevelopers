import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { AuthActions } from '../../modules/auth/redux/AuthActions';
import { Colors } from '../theme/Colors';

export const TextModal = ({ errors }) => {
  const dispatch = useDispatch()

  if (errors) {
    setTimeout(() => dispatch(AuthActions.setErrors({ errors: null })), 2000)
  }

  return (
    <Text style={styles.title}>{errors}</Text>
  )
}

const styles = StyleSheet.create({
  title: {
    color: Colors.red
  }
})
