import { StyleSheet } from 'react-native';
import Theme from '../../../core/theme';

const TabStyle = StyleSheet.create({
  container : {
    flex: 1,
    alignItems: 'center',
  },
  activeLine : {
    backgroundColor: Theme.default.green,
    height: 4
  },
  line : {
    height: 2,
    backgroundColor: Theme.default.grey,
    width:'100%',
  },
  activeText : {
    color: Theme.default.black
  },
  text : {
    color : Theme.default.grey
  }

});
export default TabStyle;
