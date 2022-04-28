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

// GREEN
import ActiveBlog from '../../../assets/svg/active-blog.svg';
import ActiveHome from '../../../assets/svg/active-home.svg';
import ActiveProfil from '../../../assets/svg/active-profil.svg';
import ActiveNotification from '../../../assets/svg/active-notification.svg';



const DEFAULT_ICON_SIZE = 25;

type Props = {
  name?: IconList;
  width?: number;
  height?: number;
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

  /**
   * Return an icon
   * @returns {JSX.Element} icon
   */
  function getIcon(): JSX.Element{
    switch (props.name){
    case 'profil': return <Profil height={ getHeight() } width={ getWidth() } />; break;
    case 'blog': return <Blog height={ getHeight() } width={ getWidth() } />; break;
    case 'home': return <Home height={ getHeight() } width={ getWidth() } />; break;
    case 'notification': return <Notification height={ getHeight() } width={ getWidth() } />; break;

    // ACTIVE
    case 'active_blog': return <ActiveBlog height={ getHeight() } width={ getWidth() } />; break;
    case 'active_home': return <ActiveHome height={ getHeight() } width={ getWidth() } />; break;
    case 'active_profil': return <ActiveProfil height={ getHeight() } width={ getWidth() } />; break;
    case 'active_notification': return <ActiveNotification height={ getHeight() } width={ getWidth() } />; break;
    // LOGO
    case 'logo_couleur': return <LogoCouleur height={ getHeight() } width={ getWidth() } />; break;
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
