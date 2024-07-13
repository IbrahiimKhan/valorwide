import {StyleSheet, Text, View} from 'react-native';
import React, {ReactElement} from 'react';

export const WalletTab = (): ReactElement => {
  return (
    <View>
      <Text style={styles.text}>Coming soon...</Text>
    </View>
  );
};

export default WalletTab;

const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
});
