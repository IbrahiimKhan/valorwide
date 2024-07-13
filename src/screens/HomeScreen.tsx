import React, {useEffect, useState} from 'react';
import {Header, PackageCard, Screen} from '../components';
import Packages from '../data/packages.json';
import {FlatList} from 'react-native';
import {SPACING} from '../theme/theme';
import {PackageData} from '../types';
import {getPackages} from '../api/apiCall';

export const HomeScreen = () => {
  const [packages, setPackages] = useState<PackageData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  console.log(packages[0]);
  useEffect(() => {
    getPackages('packagelist')
      .then(packageList => {
        setPackages(packageList);
      })
      .catch(err => {
        setError(err as Error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  console.log(packages);
  return (
    <Screen>
      <Header name={'bell'} type="feather" color="light" />
      <FlatList
        data={Packages}
        numColumns={2}
        renderItem={(item: any) => <PackageCard pack={item.item} />}
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
