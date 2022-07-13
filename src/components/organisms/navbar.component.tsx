import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { FunctionComponent } from 'react';
import { Dimensions, Pressable, View } from 'react-native';
import Theme from '../../core/theme';
import { RootStackParamList } from '../../root-stack-param-list';
import NavbarComponentStyle from '../../styles/components/organisms/navbar.style';
import Icon from '../atoms/icon.component';


const Navbar: FunctionComponent = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RootStackParamList>>();
 
  /**
   * Function triggered when one of the buttons is pressed.
   * @param {'Home' | 'Blog' | 'Notification' | 'Profil' | 'MyMatch'} button The button that was pressed. 
   */
  function onMenuItemPressed(button: 'Home' | 'Blog' | 'Notification' | 'Profil' | 'MyMatch'): void {
    switch(button){
      case 'Home': 
      if(route.name === 'Home') return;  
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home'}],
      });
      break;
      case 'Profil': 
      if(route.name === 'Profil') return;
      navigation.reset({
        index: 0,
        routes: [{ name: 'Profil'}],
      }); break;
      case 'Blog': 
      if(route.name === 'Blog') return;
      navigation.reset({
        index: 0,
        routes: [{ name: 'Blog'}],
      }); break;
      case 'Notification': 
      if(route.name === 'Notification') return;
      navigation.reset({
        index: 0,
        routes: [{ name: 'Notification'}],
      }); break;
      case 'MyMatch': 
      if(route.name === 'MyMatch') return;
      navigation.reset({
        index: 0,
        routes: [{ name: 'MyMatch'}],
      }); break;
      default: break;
    }
  }

  return (
    <View style={NavbarComponentStyle.container}>
      <Pressable style={{ alignItems: 'center', position: 'absolute', left: Dimensions.get('screen').width/2-38, top:-33}} onPress={(): void => onMenuItemPressed('MyMatch')}>
        <Icon name={route.name ==='MyMatch' ? 'logo_couleur' : 'logo_couleur'} height={78} width={78} fill={route.name ==='MyMatch' ? Theme.default.green : undefined}/>
      </Pressable>
      <View style={NavbarComponentStyle.subContainer}>
        <Pressable style={ NavbarComponentStyle.pressableIcon } onPress={ (): void => onMenuItemPressed('Home') }>
          <Icon name='home' height={25} width={25} fill={ route.name === 'Home' ? Theme.default.green : undefined } />
        </Pressable>

        <Pressable style={ NavbarComponentStyle.pressableIcon } onPress={ (): void => onMenuItemPressed('Blog') }>
          <Icon name='blog' height={25} width={25} fill={ route.name === 'Blog' ? Theme.default.green : undefined }/>
        </Pressable>

        <View style={ NavbarComponentStyle.innerContainer }/>

        <Pressable style={ NavbarComponentStyle.pressableIcon } onPress={ (): void => onMenuItemPressed('Notification') }>
          <Icon name='notification' height={25} width={25} fill={ route.name === 'Notification' ? Theme.default.green : undefined }/>
        </Pressable>
        
        <Pressable style={ NavbarComponentStyle.pressableIcon } onPress={ (): void => onMenuItemPressed('Profil') }>
          <Icon name='profil' height={25} width={25} fill={ route.name === 'Profil' ? Theme.default.green : undefined }/>
        </Pressable>
      </View>
    </View>
  );
};

export default Navbar;
