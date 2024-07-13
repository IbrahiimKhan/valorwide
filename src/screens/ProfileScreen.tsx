import React, {useState} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {
  Header,
  PersonalInfoTab,
  ProfileInfoCard,
  Screen,
  TabBar,
} from '../components';
import {BORDERRADIUS, COLORS, SPACING} from '../theme/theme';
import {tabs} from '../data';
import {renderContent} from '../helper/tabHelper';

export const ProfileScreen = () => {
  const [selectedTab, setSelectedTab] = useState<string>(tabs[0]);

  return (
    <Screen>
      <Header name="bell" type="feather" color="light" />
      <View style={styles.floatingView} />
      <View style={styles.container}>
        <ProfileInfoCard
          name="Daniel Quite"
          username="paypeoples.com/@usernaem"
          profileImage={require('../../assets/images/profile.jpeg')}
          ratings={[1, 1, 0, 0, 0]}
        />
        <TabBar selectedTab={selectedTab} onTabPress={setSelectedTab} />
      </View>
      <View style={styles.contentContainer}>{renderContent(selectedTab)}</View>
    </Screen>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: SPACING.space_16,
    borderBottomLeftRadius: SPACING.space_12,
    borderBottomRightRadius: SPACING.space_12,
    overflow: 'hidden',
  },

  floatingView: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.overlay,
    position: 'absolute',
    top: Dimensions.get('window').height / 4,
    right: 0,
    left: SPACING.space_24,
    borderRadius: BORDERRADIUS.radius_4,
  },
  contentContainer: {
    flex: 1,
    marginHorizontal: SPACING.space_16,
    marginTop: SPACING.space_36,
    paddingBottom: SPACING.space_8,
  },
});
