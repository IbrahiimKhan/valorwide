import React from 'react';
import {PersonalInfoTab, StreamTab, WalletTab} from '../components';

export const renderContent = (selectedTab: string) => {
  switch (selectedTab) {
    case 'Personal Info':
      return <PersonalInfoTab />;
    case 'Wallets':
      return <WalletTab />;
    case 'Streams':
      return <StreamTab />;
    default:
      return null;
  }
};
