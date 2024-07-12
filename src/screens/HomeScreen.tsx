import React from 'react';
import {Text, View} from 'react-native';
import {Header, Screen} from '../components';
import HStack from '../components/atom/HStack';

export const HomeScreen = () => {
  return (
    <Screen>
      <Header name={'bell'} type="feather" color="light" />
    </Screen>
  );
};

export default HomeScreen;
