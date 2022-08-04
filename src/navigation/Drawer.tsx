import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Profile from '../screens/Profile';
import BottomTab from './BottomTab';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="BottomTab">
      <Drawer.Screen
        name="BottomTab"
        component={BottomTab}
        options={{
          title: 'Home',
          drawerLabel: 'Homes',
        }}
      />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
