import React from 'react';
import {Header, PackageCard, Screen} from '../components';
import Packages from '../data/packages.json';
import {FlatList} from 'react-native';
import {SPACING} from '../theme/theme';

export const HomeScreen = () => {
  return (
    <Screen>
      <Header name={'bell'} type="feather" color="light" />
      <FlatList
        data={Packages}
        numColumns={2}
        renderItem={() => <PackageCard />}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        contentContainerStyle={{gap: SPACING.space_18}}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.ID.toString()}
      />
    </Screen>
  );
};

export default HomeScreen;
