import React from 'react';
import { Provider } from 'react-redux';
import { Router } from './core/navigation/Router';
import { store, persistor } from './core/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}