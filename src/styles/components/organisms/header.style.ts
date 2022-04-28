import { StyleSheet } from 'react-native';

const HeaderStyle = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    height: 50,
    width: '100%',
    flexDirection: 'row',
  },
  iconContainer: {
    padding: 5,
    width: 40,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textContainer: {
    padding: 5,
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }

});

export default HeaderStyle;