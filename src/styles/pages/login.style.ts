import { Dimensions, StatusBar, StyleSheet } from "react-native";

const LoginStyle = StyleSheet.create({
  container: {
    marginTop:StatusBar.currentHeight,
    height: Dimensions.get('window').height,
  },
  iconContainer: {
    position:'absolute',
    width: '100%',
    height: '50%',
    justifyContent:'center',
    alignItems:'center'
  },
  formContainer : {
    paddingHorizontal: 25,
    flex: 1,
    justifyContent:'space-evenly',
    alignItems:'center',
  },
  inputContainer: {
    width: '100%'
  },
  forgotLink: {
    alignSelf: "flex-end",
    paddingVertical: 15
  },
  button: {
    width: '70%'
  }

})
export default LoginStyle;
