import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import IconList from '../../core/types/icon-list.type';

// import LeftArrow from '../../../assets/svg/left-arrow.svg';
// import MoreOption from '../../../assets/svg/more-option.svg';
import Profil from '../../../assets/svg/profil.svg';
import LogoCouleur from '../../../assets/svg/logo-couleur.svg';
import Blog from '../../../assets/svg/blog.svg';
import Home from '../../../assets/svg/home.svg';
import Notification from '../../../assets/svg/notification.svg';
import Menu from '../../../assets/svg/dots-menu.svg';
import Back from '../../../assets/svg/arrow-left.svg';

import Theme from '../../core/theme';

const DEFAULT_ICON_SIZE = 25;
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

    // LOGO
    case 'logo_couleur': return <LogoCouleur height={ getHeight() } width={ getWidth() } fill={getFill()}/>; break;
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
