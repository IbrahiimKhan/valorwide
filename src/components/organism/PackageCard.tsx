import React, {FC, ReactElement} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {extractYearlyPercentage, toTitleCase} from '../../helper/stringHelper';
import {COLORS, FONTSIZE, SPACING} from '../../theme/theme';
import {PackageData} from '../../types';
import Icon from '../atom/Icon';

type PackageCardProps = {
  pack: PackageData;
};

export const PackageCard: FC<PackageCardProps> = ({pack}): ReactElement => {
  const {ID, Name, Price, Duration, MonthlyReturn, MaturityBonus, Bonus} = pack;

  const renderTextRow = (label: string, value: string | ReactElement) => (
    <View style={styles.row}>
      <Text style={[styles.basicText, styles.label]}>{label}</Text>
      <Text style={[styles.basicText, styles.value]}>{value}</Text>
    </View>
  );

  const renderMonthlyReturns = () =>
    MonthlyReturn.split(',').map((item, index) => (
      <Text key={index} style={[styles.basicText, styles.value]}>
        {extractYearlyPercentage(item)}
      </Text>
    ));

  const isRecommended = ID === 2;
  const isComingSoon = ID === 3;

  return (
    <LinearGradient
      colors={['#3D3D3D', '#00457C']}
      useAngle={true}
      angle={90}
      angleCenter={{x: 0.5, y: 0.5}}
      style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.basicText, styles.title]}>
          {toTitleCase(Name)}
        </Text>
        <Text style={[styles.basicText, styles.price]}>{Price}</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={[styles.basicText, styles.buttonText]}>Select</Text>
      </TouchableOpacity>
      {isRecommended && <Text style={styles.badge}>Recommended</Text>}
      {renderTextRow(
        'Profit:',
        MonthlyReturn.split(',').length > 1
          ? renderMonthlyReturns()
          : extractYearlyPercentage(MonthlyReturn),
      )}
      {renderTextRow('Maturity:', `${Duration} Year${Duration > 1 ? 's' : ''}`)}
      {renderTextRow('Bonus:', `${Bonus} tokens`)}
      {renderTextRow('Maturity Bonus:', `${MaturityBonus}% after maturity`)}
      {isComingSoon && (
        <View style={styles.comingSoon}>
          <Icon type="simpleLine" name="lock" color="light" size="space_36" />
          <Text style={styles.comingSoonText}>Coming Soon</Text>
        </View>
      )}
    </LinearGradient>
  );
};

export default PackageCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: SPACING.space_10,
    paddingVertical: SPACING.space_18,
    width: Dimensions.get('window').width / 2 - SPACING.space_30,
    paddingHorizontal: SPACING.space_8,
    position: 'relative',
    marginBottom: SPACING.space_12,
  },
  header: {
    alignItems: 'center',
    marginBottom: SPACING.space_10,
  },
  basicText: {
    color: COLORS.light,
    textAlign: 'center',
  },
  title: {
    fontSize: FONTSIZE.size_14,
    marginBottom: SPACING.space_10,
    marginTop: SPACING.space_10,
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
    fontSize: FONTSIZE.size_12,
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    margin: SPACING.space_4,
    gap: SPACING.space_8,
    alignItems: 'center',
  },
  label: {
    fontWeight: 'bold',
    fontSize: FONTSIZE.size_10,
  },
  value: {
    fontSize: FONTSIZE.size_10,
    flex: 1,
    textAlign: 'left',
  },
  badge: {
    color: COLORS.light,
    fontSize: FONTSIZE.size_10,
    position: 'absolute',
    textAlign: 'center',
    paddingVertical: SPACING.space_4,
    left: 0,
    right: 0,
    backgroundColor: COLORS.primary,
    borderTopLeftRadius: SPACING.space_10,
    borderTopRightRadius: SPACING.space_10,
  },
  comingSoon: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#00457CCC',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SPACING.space_10,
  },
  comingSoonText: {
    color: COLORS.light,
    fontSize: FONTSIZE.size_18,
    fontWeight: 'bold',
    marginTop: SPACING.space_15,
  },
});
