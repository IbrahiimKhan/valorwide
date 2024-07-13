import React, {FC, ReactElement} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, FONTSIZE, SPACING} from '../../theme/theme';
import {PackageData} from '../../types';
import HStack from '../atom/HStack';

export const PackageCard: FC<PackageData> = (): ReactElement => {
  const {height, width} = Dimensions.get('window');
  return (
    <LinearGradient
      colors={[COLORS.gray, COLORS.primary]}
      useAngle
      angle={80}
      style={styles.container}>
      <View>
        <Text style={[styles.basicText, styles.title]}>Classic Package</Text>
        <Text style={[styles.basicText, styles.price]}>$50 TO $999</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={[styles.basicText, styles.buttonText]}>Select</Text>
      </TouchableOpacity>
      <HStack vGap="space_12">
        <Text style={[styles.basicText, styles.label]}>Profit: </Text>
        <Text style={[styles.basicText, styles.value]}>4% to 7% monthly</Text>
      </HStack>
      <HStack vGap="space_12">
        <Text style={[styles.basicText, styles.label]}>Profit: </Text>
        <Text style={[styles.basicText, styles.value]}>4% to 7% monthly</Text>
      </HStack>
      <HStack vGap="space_12">
        <Text style={[styles.basicText, styles.label]}>Profit: </Text>
        <Text style={[styles.basicText, styles.value]}>4% to 7% monthly</Text>
      </HStack>
      <HStack vGap="space_12">
        <Text style={[styles.basicText, styles.label]}>Profit: </Text>
        <Text style={[styles.basicText, styles.value]}>4% to 7% monthly</Text>
      </HStack>
      <HStack vGap="space_12">
        <Text style={[styles.basicText, styles.label]}>Profit: </Text>
        <Text style={[styles.basicText, styles.value]}>4% to 7% monthly</Text>
      </HStack>
    </LinearGradient>
  );
};

export default PackageCard;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SPACING.space_10,
    padding: SPACING.space_18,
    width: Dimensions.get('window').width / 2 - SPACING.space_30,
  },
  basicText: {
    color: COLORS.light,
    textAlign: 'center',
  },
  title: {
    fontSize: FONTSIZE.size_18,
    marginBottom: SPACING.space_10,
  },
  price: {
    fontSize: FONTSIZE.size_18,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: SPACING.space_10,
    paddingHorizontal: SPACING.space_36,
    borderRadius: SPACING.space_24,
    marginVertical: SPACING.space_15,
    width: '100%',
  },
  buttonText: {
    fontSize: FONTSIZE.size_16,
  },
  label: {
    fontWeight: 'bold',
    fontSize: FONTSIZE.size_14,
  },
  value: {
    fontSize: FONTSIZE.size_14,
  },
});
