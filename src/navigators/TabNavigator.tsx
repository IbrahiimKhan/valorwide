/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Icon} from '../components';
import {HomeScreen} from '../screens/HomeScreen';
import {COLORS, SPACING} from '../theme/theme';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              type="octicon"
              name="home"
              color={focused ? 'primary' : 'light'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              type="octicon"
              name="person"
              color={focused ? 'primary' : 'light'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: SPACING.space_36 * 2,
    backgroundColor: COLORS.dark,
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: 'transparent',
  },
});

export default TabNavigator;
