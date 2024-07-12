import React, {FC, PropsWithChildren} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS, SPACING} from '../../theme/theme';

export const Screen: FC<PropsWithChildren> = ({children}) => {
  return (
    <>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor={COLORS.dark}
      />
      <SafeAreaView style={styles.screen}>
        <View style={styles.safeView}>{children}</View>
      </SafeAreaView>
    </>
  );
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.dark,
  },
  safeView: {
    height: '100%',
    paddingHorizontal: SPACING.space_24,
  },
});
