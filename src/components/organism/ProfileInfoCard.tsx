import React, {ReactElement} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {BORDERRADIUS, COLORS, FONTSIZE, SPACING} from '../../theme/theme';
import HStack from '../atom/HStack';
import Icon from '../atom/Icon';

interface ProfileInfoCardProps {
  name: string;
  username: string;
  profileImage: any;
  ratings: number[];
}

export const ProfileInfoCard: React.FC<ProfileInfoCardProps> = ({
  name,
  username,
  profileImage,
  ratings,
}): ReactElement => {
  return (
    <View style={styles.container}>
      <Image source={profileImage} style={styles.image} />
      <View style={styles.contentWrapper}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.basicText}>{username}</Text>
        <HStack vGap="space_10">
          {ratings.map((rating, index) => (
            <Icon
              key={index}
              name="star"
              type="ant"
              color={rating === 1 ? 'warning' : 'light'}
            />
          ))}
        </HStack>
      </View>
    </View>
  );
};

export default ProfileInfoCard;

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: SPACING.space_12,
    borderTopRightRadius: SPACING.space_12,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentWrapper: {
    backgroundColor: COLORS.gray,
    borderTopLeftRadius: SPACING.space_12,
    borderTopRightRadius: SPACING.space_12,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: SPACING.space_36 * 1.2,
    paddingTop: SPACING.space_36,
  },
  image: {
    height: SPACING.space_36 * 2,
    width: SPACING.space_36 * 2,
    resizeMode: 'cover',
    borderRadius: BORDERRADIUS.radius_25 * 2,
    position: 'absolute',
    zIndex: 999,
    top: 0,
  },
  basicText: {
    color: COLORS.lightGray,
  },
  name: {
    fontSize: FONTSIZE.size_18,
    fontWeight: 'bold',
    marginVertical: SPACING.space_8,
    color: COLORS.light,
    letterSpacing: 2,
  },
});
