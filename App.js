import React from 'react';
import { store } from "./app/redux/store";
import { Provider } from "react-redux";
import AppNavigator from './app/navigation/AppNavigator'

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}