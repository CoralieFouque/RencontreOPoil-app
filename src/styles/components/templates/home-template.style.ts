import { Dimensions, StatusBar, StyleSheet } from 'react-native';

const HomeStyle = StyleSheet.create({
	container: {
		flexDirection: 'column',
		height: Dimensions.get('screen').height,
		width:'100%',
		position: 'relative',
		// paddingBottom: Dimensions.get('screen').height - Dimensions.get('window').height,
		paddingBottom: 5,
		paddingTop: StatusBar.currentHeight,
		backgroundColor: 'white'
		
	},
	subContainer: {
		flex: 1,
		width: '100%',
		alignItems: 'center'
	}
});

export default HomeStyle;
