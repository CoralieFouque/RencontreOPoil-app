import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './src/components/organisms/navbar.component';
import HomeTemplate from './src/components/templates/home.template';

export default function App() {
  return (
    <View style={styles.container}>
      <HomeTemplate 
        header 
        footer
        rightIcon='home'
        leftIcon='profil'
      >
      </HomeTemplate>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
