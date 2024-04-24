import {useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import ProductListScreen from './ProductListScreen';
import CommentScreen from './CommentScreen';


const Stack = createStackNavigator();

const ProductList = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProductList"
        component={ProductListScreen}
        options={{
          title: 'Product List',
          headerStyle: {
            backgroundColor: '#8FBC8F',
          },
          headerTintColor: '#FFFFFF',
        }}
      />
      <Stack.Screen
        name="CommentScreen"
        component={CommentScreen}
        options={{
          title: 'Comments',
          headerStyle: {
            backgroundColor: '#8FBC8F',
          },
          headerTintColor: '#FFFFFF',
        }}
      />
    </Stack.Navigator>
  );
};





export default ProductList;
