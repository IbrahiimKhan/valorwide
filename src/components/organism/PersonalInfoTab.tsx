import React, {ReactElement, useCallback} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {ProfileInfoCardData} from '../../data';
import {SPACING} from '../../theme/theme';
import {ProfileInfoCardType} from '../../types';
import List from '../molecule/List';

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
