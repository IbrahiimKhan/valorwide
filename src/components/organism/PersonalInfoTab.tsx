import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {ReactElement, useCallback} from 'react';
import List from '../molecule/List';
import {ProfileInfoCardData} from '../../data';
import {ProfileInfoCardType} from '../../types';
import {SPACING} from '../../theme/theme';

export const PersonalInfoTab = (): ReactElement => {
  // render the card data
  const renderItem = useCallback(
    ({item}: {item: ProfileInfoCardType}) => <List item={item} />,
    [],
  );

  return (
    <View>
      <FlatList
        data={ProfileInfoCardData}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.itemSeprator} />}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item: ProfileInfoCardType) => item.id.toString()}
      />
    </View>
  );
};

export default PersonalInfoTab;

const styles = StyleSheet.create({
  itemSeprator: {
    height: SPACING.space_10,
  },
});
