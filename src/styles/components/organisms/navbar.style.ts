import { StyleSheet } from 'react-native';
import Theme from '../../../core/theme';

const NavbarComponentStyle = StyleSheet.create({
  container: {
    height: 103,
    width: '100%',
  },
  topContainer: {
    height: 33,
    width: '100%',
    borderBottomColor: Theme.default.primary,
    borderBottomWidth: 1,
  },
  subContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'stretch',
  },
  pressableIcon: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    width: 78,
    height: '100%',
  }
});

export default NavbarComponentStyle;
