/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {COLORS, SPACING} from '../../theme/theme';
import {tabs} from '../../data';

interface TabBarProps {
  selectedTab: string;
  onTabPress: (tab: string) => void;
}

export const TabBar: React.FC<TabBarProps> = ({selectedTab, onTabPress}) => {
  return (
    <View style={styles.tabBar}>
      {tabs.map(tab => (
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
          <Text style={selectedTab === tab ? styles.activeTab : styles.tabText}>
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: COLORS.gray,
    justifyContent: 'space-around',
    borderTopWidth: 0.5,
    borderColor: COLORS.lightGray,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: COLORS.lightGray,
    paddingVertical: SPACING.space_12,
  },
  activeTab: {
    fontWeight: 'bold',
    color: COLORS.light,
    paddingVertical: SPACING.space_12,
  },
});

export default TabBar;
