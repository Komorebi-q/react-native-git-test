import React from 'react';
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

import PopularPage from './../page/PopularPage';
import FavoritePage from './../page/FavoritePage';
import TrendingPage from './../page/TrendingPage';
import MyPage from './../page/MyPage';
import NavigationUtil from './NavigationUtil';

const TABS = {
    PopularPage: {
        screen: PopularPage,
        navigationOptions: {
            tabBarLabel: '最热',
            tabBarIcon: ({tintColor, focused}) => (
                <MaterialIcons
                    name={'whatshot'}
                    size={26}
                    style={{color: tintColor}}
                />
            ),
        },
    },
    TrendingPage: {
        screen: TrendingPage,
        navigationOptions: {
            tabBarLabel: '趋势',
            tabBarIcon: ({tintColor, focused}) => (
                <Ionicons
                    name={'md-trending-up'}
                    size={26}
                    style={{color: tintColor}}
                />
            ),
        },
    },
    FavoritePage: {
        screen: FavoritePage,
        navigationOptions: {
            tabBarLabel: '收藏',
            tabBarIcon: ({tintColor, focused}) => (
                <MaterialIcons
                    name={'favorite'}
                    size={26}
                    style={{color: tintColor}}
                />
            ),
        },
    },
    MyPage: {
        screen: MyPage,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({tintColor, focused}) => (
                <Entypo name={'user'} size={26} style={{color: tintColor}} />
            ),
        },
    },
};

class TabBarComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.theme = {
            tintColor: props.activeTintColor,
            updateTime: Date.now(),
        };
    }

    render() {
        const {routes, index} = this.props.navigation.state;

        if (routes[index].params) {
            const {theme} = routes[index].params;

            if (theme && theme.updateTime > this.theme.updateTime) {
                this.theme = theme;
            }
        }

        const TabBarProps = {
            ...this.props,
            activeTintColor: this.theme.tintColor,
        };

        return <BottomTabBar {...TabBarProps} />;
    }
}

class DynamicNavigator extends React.Component {
    render() {
        const Tabs = this._getTabNavigator();
        return <Tabs />;
    }

    _getTabNavigator = () => {
        const {PopularPage, TrendingPage, FavoritePage, MyPage} = TABS;
        const tabs = {PopularPage, TrendingPage, FavoritePage, MyPage};

        return createAppContainer(
            createBottomTabNavigator(tabs, {
                tabBarComponent: TabBarComponent,
            }),
        );
    };
}

export default DynamicNavigator;
