import React from 'react';
import {View, Text, Button} from 'react-native';

class Detail extends React.Component {
  render() {
    const {navigation} = this.props;

    return (
      <View>
        <Text>Detail</Text>
        <Button
          title="change Theme"
          onPress={() => {
            navigation.setParams({
              theme: {tintColor: 'blue', updateTime: Date.now()},
            });
          }}></Button>
      </View>
    );
  }
}

export default Detail;
