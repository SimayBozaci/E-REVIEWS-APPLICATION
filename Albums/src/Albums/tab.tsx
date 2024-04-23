import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image} from 'react-native';

import {AboutScreen, HomeScreen, ProductsScreen} from '.';

const NewTab = createBottomTabNavigator();

const TabsNew = () => {
  return (
    <NewTab.Navigator>
      <NewTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../../assets/ıcons/1.png')}
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? 'black' : 'black',
              }}
              resizeMode="contain"
            />
          ),
        }}
      />

      <NewTab.Screen
        name="Products"
        component={ProductsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../../assets/ıcons/product-29.png')}
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? 'black' : 'black',
              }}
              resizeMode="contain"
            />
          ),
        }}
      />

      <NewTab.Screen
        name="About"
        component={AboutScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../../assets/ıcons/about.png')}
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? 'black' : 'black',
              }}
              resizeMode="contain"
            />
          ),
        }}
      />
    </NewTab.Navigator>
  );
};

export default TabsNew;
