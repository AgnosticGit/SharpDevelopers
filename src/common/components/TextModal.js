import React from 'react';
import { Text } from 'react-native';
import { useDispatch } from 'react-redux'
import { AuthActions } from '../../modules/auth/redux/AuthActions';

export const TextModal = ({ errors }) => {
  const dispatch = useDispatch()

  if (errors) {
    setTimeout(() => dispatch(AuthActions.setErrors({errors: null})), 2000)
  }

  return (
    <Text>{errors}</Text>
  )
}
