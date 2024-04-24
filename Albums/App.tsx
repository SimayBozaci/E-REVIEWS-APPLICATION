import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import TabsNew from './src/Albums/tab';
import { Text, View } from 'react-native';

const MyTabs: React.FC = () => {
  return (
    
     <NavigationContainer>
      <TabsNew />
     </NavigationContainer>
  );
};

export default MyTabs;
