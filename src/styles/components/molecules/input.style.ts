import { StyleSheet } from 'react-native';
import Theme from '../../../core/theme';

const InputStyle = StyleSheet.create({
  container: {
    borderRadius: Theme.default.input_border_radius,
    borderColor: Theme.default.border_color,
    borderWidth: 1,
    height: Theme.default.minimum_height,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginVertical: 5,
  },
  inputText: {
    color: Theme.default.black,
    fontSize: Theme.default.text_size,
    fontFamily: Theme.default.font_secondary,
  },
});

export default InputStyle;