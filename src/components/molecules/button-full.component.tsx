import { promiseImpl } from 'ejs';
import React, { FunctionComponent, ReactNode } from 'react';
import { Pressable } from 'react-native';
import Theme from '../../core/theme';
import FullButtonStyle from '../../styles/components/molecules/button-full.style';
import Icon from '../atoms/icon.component';
import Text from '../atoms/text.component';

type Props = {
  onPress?: () => void;
  children?: ReactNode; 
}

const FullButton : FunctionComponent<Props> = (props: Props) => {
  return (
    <Pressable style={FullButtonStyle.container} onPress={props.onPress}>
      <Text style={FullButtonStyle.text} size={12}>{props.children}</Text>
      <Icon name='arrow-right' fill={Theme.default.dark_grey} height={15} width={10}/>
    </Pressable>
  );
};
export default FullButton;
