import { StyleSheet } from 'react-native';
import Theme from '../../../core/theme';

const ButtonStyle = StyleSheet.create({
  container: {
    backgroundColor: Theme.default.secondary,
    height: 66, 
    width:'100%',
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: Theme.default.button_border_radius,
  }
});

export default ButtonStyle;