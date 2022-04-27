import React, { FunctionComponent } from 'react';
import { Pressable, StyleProp, TextStyle, ViewStyle } from 'react-native';
import Fonts from '../../core/enums/fonts.enum';
import Text from '../atoms/text.component';

type Props = {
  textStyle?: StyleProp<TextStyle>;
  children?: React.ReactNode;
  size?: number;
  font?: Fonts;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  color?: string;
  onPress?: () => void;
}

const Link: FunctionComponent<Props> = (props: Props) => {
  return (
    <Pressable style={props.style} onPress={props.onPress} disabled={props.disabled}>
      <Text size={props.size} font={props.font} color={props.color} style={props.textStyle}> 
        {props.children}
      </Text>
    </Pressable>
  );
};

export default Link;