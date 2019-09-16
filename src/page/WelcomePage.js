import React from 'react';
import {View, Text} from 'react-native';
import NavigationUtil from './../navigator/NavigationUtil';

class Welcome extends React.Component {
    componentDidMount() {
        this.timer = setTimeout(() => {
            NavigationUtil.resetToHomePage({navigation: this.props.navigation});
        }, 1000);
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    render() {
        return (
            <View>
                <Text>Welcome</Text>
            </View>
        );
    }
}

export default Welcome;
