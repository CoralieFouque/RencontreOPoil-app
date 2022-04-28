import React, { FunctionComponent } from 'react';
import { Pressable, StyleProp, View, ViewStyle } from 'react-native';
import IconList from '../../core/types/icon-list.type';
import NavbarComponentStyle from '../../styles/components/organisms/navbar.style';
import Icon from '../atoms/icon.component';

type Props = {
  active?: IconList;
  style?: StyleProp<ViewStyle>;
  onPress?: (button: IconList) => void;
}

const Navbar: FunctionComponent<Props> = (props: Props) => {
  
  /**
   * Function triggered when one of the buttons is pressed.
   * @param {NavbarIcons} button The button that was pressed. 
   */
  function onPress(button: IconList): void {
    if (props.onPress) {
      props.onPress(button);
    }
  }

  return (
    <View style={NavbarComponentStyle.container}>
      <View style={NavbarComponentStyle.topContainer}>
        <View style={{ alignItems: 'center' }}>
          <Icon name='logo_couleur' height={78} width={78}/>
        </View>
      </View>
      <View style={ [NavbarComponentStyle.subContainer, props.style] }>
        <Pressable style={ NavbarComponentStyle.pressableIcon } onPress={ (): void => onPress('home') }>
          <Icon
            name={ props.active === 'home' ? 'active_home' : 'home' }
          />
        </Pressable>

        <Pressable style={ NavbarComponentStyle.pressableIcon } onPress={ (): void => onPress('blog') }>
          <Icon
            name={ props.active === 'blog' ? 'active_blog' : 'blog' }
          />
        </Pressable>

        <View style={ NavbarComponentStyle.innerContainer } >

        </View>

        <Pressable style={ NavbarComponentStyle.pressableIcon } onPress={ (): void => onPress('notification') }>
          <Icon
            name={ props.active === 'notification' ? 'active_notification' : 'notification' }
          />
        </Pressable>
        
        <Pressable style={ NavbarComponentStyle.pressableIcon } onPress={ (): void => onPress('profil') }>
          <Icon
            name={ props.active === 'profil' ? 'active_profil' : 'profil' }
          />
        </Pressable>
      </View>
    </View>
  );
};

export default Navbar;
