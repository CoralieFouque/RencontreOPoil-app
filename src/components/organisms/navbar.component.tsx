import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { FunctionComponent } from 'react';
import { Pressable, View } from 'react-native';
import Theme from '../../core/theme';
import { RootStackParamList } from '../../root-stack-param-list';
import NavbarComponentStyle from '../../styles/components/organisms/navbar.style';
import Icon from '../atoms/icon.component';


const Navbar: FunctionComponent = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RootStackParamList>>();
 
  /**
   * Function triggered when one of the buttons is pressed.
   * @param {'Home' | 'Blog' | 'Notification' | 'Profil'} button The button that was pressed. 
   */
  function onMenuItemPressed(button: 'Home' | 'Blog' | 'Notification' | 'Profil'): void {
    switch(button){
      case 'Home': 
      if(route.name === 'Home') return;  
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home'}],
      });
      break;
      default: break;
    }
  }

  return (
    <View style={NavbarComponentStyle.container}>
      <View style={NavbarComponentStyle.topContainer}>
        <View style={{ alignItems: 'center' }}>
          <Icon name='logo_couleur' height={78} width={78}/>
        </View>
      </View>
      <View style={NavbarComponentStyle.subContainer}>
        <Pressable style={ NavbarComponentStyle.pressableIcon } onPress={ (): void => onMenuItemPressed('Home') }>
          <Icon name='home' fill={ route.name === 'Home' ? Theme.default.secondary : undefined } />
        </Pressable>

        <Pressable style={ NavbarComponentStyle.pressableIcon } onPress={ (): void => onMenuItemPressed('Blog') }>
          <Icon name='blog' fill={ route.name === 'Home' ? Theme.default.secondary : undefined }/>
        </Pressable>

        <View style={ NavbarComponentStyle.innerContainer }/>

        <Pressable style={ NavbarComponentStyle.pressableIcon } onPress={ (): void => onMenuItemPressed('Notification') }>
          <Icon name='notification' fill={ route.name === 'Home' ? Theme.default.secondary : undefined }/>
        </Pressable>
        
        <Pressable style={ NavbarComponentStyle.pressableIcon } onPress={ (): void => onMenuItemPressed('Profil') }>
          <Icon name='profil' fill={ route.name === 'Home' ? Theme.default.secondary : undefined }/>
        </Pressable>
      </View>
    </View>
  );
};

export default Navbar;
