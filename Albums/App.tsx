import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import TabsNew from './src/Albums/tab';

const MyTabs: React.FC = () => {
  return (
    <NavigationContainer>
      <TabsNew />
    </NavigationContainer>
  );
};

export default MyTabs;
