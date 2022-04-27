import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import IconList from '../../core/types/icon-list.type';

import LeftArrow from '../../../assets/svg/left-arrow.svg';
import MoreOption from '../../../assets/svg/more-option.svg';


const DEFAULT_ICON_SIZE = 20;

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
    case 'left_arrow' : return <LeftArrow height={ getHeight()} width={getWidth() } />; break;
    case 'more_option' : return <MoreOption height={ getHeight()} width={getWidth() } />; break;
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
