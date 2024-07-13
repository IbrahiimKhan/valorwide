import {StyleSheet, Text, View} from 'react-native';
import React, {FC, ReactElement} from 'react';
import HStack from '../atom/HStack';
import Icon from '../atom/Icon';
import {BORDERRADIUS, COLORS, SPACING} from '../../theme/theme';
import {ProfileInfoCardType} from '../../types';

type ListProps = {
  item: ProfileInfoCardType;
};

export const List: FC<ListProps> = ({item}): ReactElement => {
  const {
    subtitle,
    title,
    active,
    copy,
    inactive,
    leftIcon,
    rightIcon,
    share,
    leftIconTye,
  } = item;

  return (
    <View style={styles.container}>
      <HStack justifyContent="space-between">
        <HStack gap="space_10">
          <Icon
            name={leftIcon as string}
            type={leftIconTye ? leftIconTye : 'material'}
          />
          <View>
            <Text style={styles.basicText}>{title}</Text>
            {subtitle ? <Text style={styles.basicText}>{subtitle}</Text> : null}
            {active && inactive ? (
              <>
                <HStack gap="space_10">
                  <Icon name="user-check" type="feather" />
                  <Text style={styles.basicText}>Acive</Text>
                </HStack>
                <HStack gap="space_10">
                  <Icon name="user-minus" type="feather" />
                  <Text style={styles.basicText}>Inactive</Text>
                </HStack>
              </>
            ) : null}
          </View>
        </HStack>
        <View>
          {active && inactive ? (
            <>
              <Text style={styles.basicText}>{active}</Text>
              <Text style={styles.basicText}>{inactive}</Text>
            </>
          ) : null}
          {rightIcon ? (
            <HStack gap="space_10">
              <Icon name={rightIcon ? rightIcon : 'eyeo'} type="ant" />
              <Text style={styles.basicText}>
                {title.toLowerCase()?.includes('activated')
                  ? 'Upgrade'
                  : 'View'}
              </Text>
            </HStack>
          ) : null}
          {copy && share ? (
            <HStack gap="space_10">
              <HStack gap="space_10">
                <Icon name="copy" type="feather" />
                <Text style={styles.basicText}>Copy</Text>
              </HStack>
              <HStack gap="space_10">
                <Icon name="share-2" type="feather" />
                <Text style={styles.basicText}>Share</Text>
              </HStack>
            </HStack>
          ) : null}
        </View>
      </HStack>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.dark,
    borderRadius: BORDERRADIUS.radius_4,
    paddingHorizontal: SPACING.space_8,
    paddingVertical: SPACING.space_16,
  },
  basicText: {
    color: COLORS.light,
  },
});
