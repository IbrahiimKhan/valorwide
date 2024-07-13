import React from 'react';
import {StyleSheet} from 'react-native';
import {Header, ProfileInfoCard, Screen} from '../components';

export const ProfileScreen = () => {
  return (
    <Screen>
      <Header name="bell" type="feather" color="light" />
      <ProfileInfoCard
        name="Daniel Quite"
        username="paypeoples.com/@usernaem"
        profileImage={require('../../assets/images/profile.jpeg')}
        ratings={[1, 1, 0, 0, 0]}
      />
    </Screen>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
