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
    borderBottomColor: 'rgba(228, 99, 75, 0.4)',
    borderBottomWidth: 1,
    shadowOffset:{
      height:30,
      width:0
    },
    shadowColor: 'blue',
    shadowOpacity: 1
    
    
    
  },
  subContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',

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
