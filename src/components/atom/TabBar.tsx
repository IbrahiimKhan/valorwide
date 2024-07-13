/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {COLORS, FONTSIZE, SPACING} from '../../theme/theme';
import {tabs} from '../../data';
import Icon from './Icon';
import HStack from './HStack';

interface TabBarProps {
  selectedTab: string;
  onTabPress: (tab: string) => void;
}

export const TabBar: React.FC<TabBarProps> = ({selectedTab, onTabPress}) => {
  const icons: string[] = ['user', 'wallet', 'coins'];
  return (
    <View style={styles.tabBar}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={tab}
          onPress={() => onTabPress(tab)}
          style={[
            styles.tab,
            tab.toLowerCase() !== 'streams' && {
              borderRightWidth: 0.5,
              borderRightColor: COLORS.lightGray,
            },
          ]}>
          <HStack gap="space_10">
            <Icon name={icons[index]} type="fa5" size="space_15" />
            <Text
              style={selectedTab === tab ? styles.activeTab : styles.tabText}>
              {tab}
            </Text>
          </HStack>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: COLORS.gray,
    justifyContent: 'space-between',
    borderTopWidth: 0.5,
    borderColor: COLORS.lightGray,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: COLORS.lightGray,
    paddingVertical: FONTSIZE.size_10,
  },
  activeTab: {
    fontWeight: 'bold',
    color: COLORS.light,
    paddingVertical: FONTSIZE.size_10,
  },
});

export default TabBar;
