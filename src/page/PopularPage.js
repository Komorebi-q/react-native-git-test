import React from 'react';
import {View, Text, Button, StyleSheet, Picker, PickerIOS} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

import NavigationUtil from './../navigator/NavigationUtil';

const styles = StyleSheet.create({
    tabStyle: {
        minWidth: 50,
    },
    indicatorStyle: {
        height: 2,
        backgroundColor: 'white',
    },
    labelStyle: {
        fontSize: 13,
        marginTop: 6,
        marginBottom: 6,
    },
});

class Detail extends React.Component {
    constructor(props) {
        super(props);

        this.tabNames = [
            'Java',
            'Android',
            'iOS',
            'React',
            'React Native',
            'PHP',
        ];
    }

    render() {
        const TabNav = this._getTopTab();

        return (
            <View
                style={{flex: 1}}
                onStartShouldSetResponder={e => {
                    console.log(e);
                }}
                onResponderMove={e => {
                    console.log('move -->', e);
                }}>
                <TabNav />
            </View>
        );
    }

    _getTopTab = () => {
        const tabs = {};

        for (const t of this.tabNames) {
            tabs[`tab-${t}`] = {
                screen: props => <PopularTab {...props} title={t} />,
                navigationOptions: {
                    title: t,
                },
            };
        }
        return createAppContainer(
            createMaterialTopTabNavigator(tabs, {
                tabBarOptions: {
                    tabStyle: styles.tabStyle,
                    upperCaseLabel: false,
                    scrollEnabled: true,
                    style: {
                        backgroundColor: '#789',
                    },
                    indicatorStyle: styles.indicatorStyle,
                    labelStyle: styles.labelStyle,
                },
            }),
        );
    };
}

class PopularTab extends React.Component {
    state = {
        language: 'Java',
    };
    render() {
        return (
            <View>
                <Text>{this.props.title}</Text>
                <Text>Navigator Tab</Text>

                <PickerIOS
                    selectedValue={this.state.language}
                    mode="dialog"
                    style={{height: 50, width: 100}}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({language: itemValue})
                    }>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </PickerIOS>

                <Button
                    title="go Detail"
                    onPress={() => {
                        NavigationUtil.goPage(
                            {navigation: NavigationUtil.bottomNavigation},
                            'DetailPage',
                        );
                    }}></Button>
            </View>
        );
    }
}

export default Detail;
