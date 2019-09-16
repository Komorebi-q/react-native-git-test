import React from 'react';
import {} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

// import pages
import WelcomePage from '../page/WelcomePage';
import HomePage from '../page/HomePage';
import DetailPage from '../page/DetailPage';

const InitNavigator = createStackNavigator(
  {
    WelcomePage: {
      screen: WelcomePage,
      navigationOptions: {
        header: null,
      },
    },
  },
  {},
);

const MainNavigator = createStackNavigator(
  {
    HomePage: {
      screen: HomePage,
      navigationOptions: {
        header: null,
      },
    },
    DetailPage: {
      screen: DetailPage,
      navigationOptions: {
        header: null,
      },
    },
  },
  {},
);

export default createAppContainer(
  createSwitchNavigator(
    {
      Init: InitNavigator,
      Main: MainNavigator,
    },
    {
      initialRouteName: 'Init',
      navigationOptions: {
        header: null,
      },
    },
  ),
);
