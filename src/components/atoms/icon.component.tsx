import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import IconList from '../../core/types/icon-list.type';
import Theme from '../../core/theme';

import Left from '../../../assets/svg/left.svg';
// import MoreOption from '../../../assets/svg/more-option.svg';
import Profil from '../../../assets/svg/profil.svg';
import Blog from '../../../assets/svg/blog.svg';
import Home from '../../../assets/svg/home.svg';
import Notification from '../../../assets/svg/notification.svg';
import Menu from '../../../assets/svg/dots-menu.svg';
import Back from '../../../assets/svg/arrow-left.svg';
import Right from '../../../assets/svg/arrow-right.svg';
import Cross from '../../../assets/svg/cross.svg';
import Plus from '../../../assets/svg/plus.svg';
import Sos from '../../../assets/svg/sos.svg';
import Heart from '../../../assets/svg/heart.svg';
import Location from '../../../assets/svg/location.svg';

// PICTO
import Food from '../../../assets/svg/picto-food.svg';
import Vet from '../../../assets/svg/picto-vet.svg';
import Walk from '../../../assets/svg/picto-walk.svg';
import Care from '../../../assets/svg/picto-care.svg';

// LOGO
import LogoSombre from '../../../assets/svg/logo-sombre.svg';
import LogoCouleur from '../../../assets/svg/logo-couleur.svg';
import LogoBlanc from '../../../assets/svg/logo-blanc.svg';


const DEFAULT_ICON_SIZE = 20;
const DEFAULT_ICON_FILL = Theme.default.orange;

type Props = {
  name?: IconList;
  width?: number;
  height?: number;
  fill?: string;
}

const Icon : FunctionComponent<Props> = (props: Props) => {
  /**
   * Either width passed in props or default width
   * @returns {number} icon width
   */
  function getWidth(): number {
    return props.width ?? DEFAULT_ICON_SIZE;
  }
  /**
   * Either height passed in props or default height
   * @returns {number} icon height
   */
  function getHeight(): number {
    return props.height ?? DEFAULT_ICON_SIZE;
  }

  function getFill(): string {
    return props.fill ?? DEFAULT_ICON_FILL;
  }

  /**
   * Return an icon
   * @returns {JSX.Element} icon
   */
  function getIcon(): JSX.Element{
    switch (props.name){
    case 'profil': return <Profil height={ getHeight() } width={ getWidth() } fill={getFill()} />; break;
    case 'blog': return <Blog height={ getHeight() } width={ getWidth() } fill={getFill()}/>; break;
    case 'home': return <Home height={ getHeight() } width={ getWidth() } fill={getFill()}/>; break;
    case 'notification': return <Notification height={ getHeight() } width={ getWidth() } fill={getFill()} />; break;
    case 'menu': return <Menu height={ getHeight() } width={ getWidth() } fill={getFill()}/>; break;
    case 'back': return <Back height={ getHeight() } width={ getWidth() } fill={getFill()}/>; break;
    case 'arrow-right': return <Right height={ getHeight() } width={ getWidth() } fill={getFill()}/>; break;
    case 'cross' : return <Cross height={ getHeight() } width={ getWidth() } fill={getFill()}/>; break;
    case 'plus': return <Plus height={ getHeight() } width={ getWidth() } fill={getFill()}/>; break;
    case 'sos': return <Sos height={ getHeight() } width={ getWidth() } fill={getFill()}/>; break;
    case 'heart': return <Heart height={ getHeight() } width={ getWidth() } fill={getFill()}/>; break;
    case 'arrow-left': return <Left height={ getHeight() } width={ getWidth() } fill={getFill()}/>; break;
    case 'location': return <Location height={ getHeight() } width={ getWidth() } fill={getFill()}/>; break;
     
    // PICTO
    case 'food': return <Food height={ getHeight() } width={ getWidth() } fill={getFill()}/>; break;
    case 'vet': return <Vet height={ getHeight() } width={ getWidth() } fill={getFill()}/>; break;
    case 'walk': return <Walk height={ getHeight() } width={ getWidth() } fill={getFill()}/>; break;
    case 'care': return <Care height={ getHeight() } width={ getWidth() } fill={getFill()}/>; break;

    // LOGO
    case 'logo_couleur': return <LogoCouleur height={ getHeight() } width={ getWidth() }/>; break;
    case 'logo_sombre': return <LogoSombre height={ getHeight() } width={ getWidth() }/>; break;
    case 'logo-blanc':  return <LogoBlanc height={ getHeight() } width={ getWidth() }/>; break;
    default : return <View/>;
    }
  }

  return (
    <View>
      { getIcon() }
    </View>
  );
};

export default Icon;
