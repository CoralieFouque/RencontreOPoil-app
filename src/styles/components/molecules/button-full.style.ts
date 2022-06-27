import { StyleSheet } from 'react-native';
import Theme from '../../../core/theme';

const FullButtonStyle = StyleSheet.create({
  container : {
    height: 47,
    width: '100%',
    paddingHorizontal: 14,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Theme.default.grey,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text : {
    flex: 1,
  }
});
export default FullButtonStyle;
