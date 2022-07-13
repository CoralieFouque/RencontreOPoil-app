import { StyleSheet } from 'react-native';
import Theme from '../../../core/theme';

const ButtonStyle = StyleSheet.create({
  container: {
    backgroundColor: Theme.default.green,
    height: Theme.default.minimum_height, 
    width:'100%',
    alignItems: 'center',
    justifyContent:'space-evenly',
    borderRadius: Theme.default.button_border_radius,
    flexDirection: 'row',
  }
});

export default ButtonStyle;