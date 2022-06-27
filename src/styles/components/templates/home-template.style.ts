import { Dimensions, Platform, StatusBar, StyleSheet } from 'react-native';

const HomeStyle = StyleSheet.create({
	container: {
		flexDirection: 'column',
		height: Dimensions.get('screen').height - Platform.select({android: StatusBar.currentHeight, default: 0}),
		width:'100%',
		position: 'relative',
		paddingBottom: 32,
		marginTop: 50,
		backgroundColor: 'white'
	},
	subContainer: {
		flex: 1,
		width: '100%',
		alignItems: 'center'
	}
});

export default HomeStyle;
