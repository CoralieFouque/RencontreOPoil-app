import { StyleSheet } from 'react-native';
import Theme from '../../../core/theme';

const NavbarComponentStyle = StyleSheet.create({
  container: {
    height: 70,
    width: '100%',
    elevation: 2,
    shadowColor: 'red',
    marginTop: 33
  },

  subContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent:'center',
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
