/* eslint-disable react/no-unstable-nested-components */
import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import {getPackages} from '../api/apiCall';
import {ExpiryCard, Header, PackageCard, Screen} from '../components';
import Loader from '../components/atom/Loader';
import {COLORS, FONTSIZE, SPACING} from '../theme/theme';
import {PackageData} from '../types';

export const HomeScreen: React.FC = () => {
  const [packages, setPackages] = useState<PackageData[]>([]);
  const [loading, setLoading] = useState(true);

  //fetch data when on mount
  useEffect(() => {
    getPackages('packagelist')
      .then(packageList => setPackages(packageList))
      .catch(_err => '')
      .finally(() => setLoading(false));
  }, []);

  // render the packages
  const renderItem = useCallback(
    ({item}: {item: PackageData}) => <PackageCard pack={item} />,
    [],
  );

  //extract the key
  const keyExtractor = useCallback(
    (item: PackageData) => item.ID.toString(),
    [],
  );

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Screen>
          <Header name="bell" type="feather" color="light" />
          <Text style={styles.sectionHeader}>Get FDR Package</Text>
          <ExpiryCard name="info">
            <Text style={styles.text}>
              You are using{' '}
              <Text style={styles.highlight}>
                free version only for 30 days
              </Text>
              . Get package and build community.
            </Text>
          </ExpiryCard>
          <FlatList
            data={packages}
            numColumns={2}
            renderItem={renderItem}
            columnWrapperStyle={styles.columnWrapperStyle}
            contentContainerStyle={styles.contentContainerStyle}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            keyExtractor={keyExtractor}
            ListEmptyComponent={() => <Text>No Data Found..</Text>}
          />
        </Screen>
      )}
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  sectionHeader: {
    color: COLORS.light,
    marginBottom: SPACING.space_10,
    fontSize: FONTSIZE.size_24,
    fontWeight: 'bold',
  },
  text: {
    color: COLORS.light,
    flex: 1,
  },
  highlight: {
    fontWeight: 'bold',
  },
  columnWrapperStyle: {
    justifyContent: 'space-between',
  },
  contentContainerStyle: {
    gap: SPACING.space_18,
  },
});
