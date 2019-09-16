import React from 'react';
import {Text, View, Button} from 'react-native';

import NavigationUtil from './../navigator/NavigationUtil';
import DynamicTabNavigator from './../navigator/DynamicTabNavigator';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        console.disableYellowBox = true;
    }

    componentDidMount() {
        NavigationUtil.bottomNavigation = this.props.navigation;
    }

    render() {
        return <DynamicTabNavigator />;
    }
}

export default HomePage;
