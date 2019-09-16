class NavigationUtil {
  static bottomNavigation;

  static goPage(props, page) {
    const {navigation} = props;

    if (!navigation) {
      console.log('navigation not can be null');

      return;
    }

    navigation.navigate(page);
  }

  static goBack(navigation) {
    navigation.goBack();
  }

  static resetToHomePage(props) {
    const {navigation} = props;

    navigation.navigate('Main');
  }
}

export default NavigationUtil;
