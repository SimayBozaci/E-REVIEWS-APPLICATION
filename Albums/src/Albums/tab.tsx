import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image, View} from 'react-native';

import HomeScreen from './Containers/HomeScreen';
// import ProductScreen from './Containers/ProductScreen';
import AboutScreen from './Containers/AboutScreen';
import ProductScreen from './Containers/ProductScreen';
// import ProductScreen from './Containers/ProductScreen';



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
        component={ProductScreen}
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
