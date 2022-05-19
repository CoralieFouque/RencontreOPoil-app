import { Dimensions, Platform, StatusBar, StyleSheet } from 'react-native';

const HomeStyle = StyleSheet.create({
	container: {
		flexDirection: 'column',
		height: Dimensions.get('screen').height - Platform.select({android: StatusBar.currentHeight, default: 0}),
		width:'100%',
		position: 'relative',
		paddingBottom: 15,
		marginTop: 50,
	},
	subContainer: {
		flex: 1,
		width: '100%',
	}
});

export default HomeStyle;
