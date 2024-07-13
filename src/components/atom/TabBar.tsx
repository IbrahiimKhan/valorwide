import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {COLORS, FONTSIZE} from '../../theme/theme';
import {tabs} from '../../data';
import Icon from './Icon';
import HStack from './HStack';

interface TabBarProps {
  selectedTab: string;
  onTabPress: (tab: string) => void;
}

export const TabBar: React.FC<TabBarProps> = ({selectedTab, onTabPress}) => {
  const icons: string[] = ['user', 'wallet', 'coins'];

  const renderTab = (tab: string, index: number) => {
    const isActive = selectedTab === tab;

    return (
      <TouchableOpacity
        key={tab}
        onPress={() => onTabPress(tab)}
        style={[styles.tab, index < tabs.length - 1 && styles.borderRight]}>
        <HStack gap="space_4">
          <Icon name={icons[index]} type="fa5" size="space_15" />
          <Text style={isActive ? styles.activeTab : styles.tabText}>
            {tab}
          </Text>
        </HStack>
      </TouchableOpacity>
    );
  };

  return <View style={styles.tabBar}>{tabs.map(renderTab)}</View>;
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
  borderRight: {
    borderRightWidth: 0.5,
    borderRightColor: COLORS.lightGray,
  },
  tabText: {
    color: COLORS.lightGray,
    paddingVertical: FONTSIZE.size_8,
  },
  activeTab: {
    fontWeight: 'bold',
    color: COLORS.light,
    paddingVertical: FONTSIZE.size_8,
  },
});

export default TabBar;
