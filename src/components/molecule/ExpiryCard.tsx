import React, {FC, PropsWithChildren, ReactElement} from 'react';
import {StyleSheet, View} from 'react-native';
import {IconProps} from 'react-native-vector-icons/Icon';
import {COLORS, SPACING} from '../../theme/theme';
import HStack from '../atom/HStack';
import Icon from '../atom/Icon';

type ExpiryCardProps = IconProps & PropsWithChildren;
export const ExpiryCard: FC<ExpiryCardProps> = ({
  name = 'info',
  children,
}): ReactElement => {
  return (
    <View style={styles.container}>
      <HStack gap="space_12" vGap="space_10">
        <Icon name={name} color="light" />
        {children}
      </HStack>
    </View>
  );
};

export default ExpiryCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    borderRadius: SPACING.space_12,
    marginVertical: SPACING.space_16,
    paddingHorizontal: SPACING.space_10,
  },
});
