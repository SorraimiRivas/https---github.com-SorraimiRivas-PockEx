import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {FavoritesStack, HomeStack} from './Stack';

const Tab = createMaterialBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator initialRouteName="HomeStack">
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="FavoriteStack"
        component={FavoritesStack}
        options={{
          tabBarLabel: 'Favorites',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
