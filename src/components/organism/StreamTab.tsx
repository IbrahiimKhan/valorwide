import {StyleSheet, Text, View} from 'react-native';
import React, {ReactElement} from 'react';

export const StreamTab = (): ReactElement => {
  return (
    <View>
      <Text style={styles.text}>Coming soon...</Text>
    </View>
  );
};

export default StreamTab;

const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
});
