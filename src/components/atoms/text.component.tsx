import React, { FunctionComponent } from 'react';
import { Text as RNText, TextStyle, StyleProp } from 'react-native';
import Fonts from '../../core/enums/fonts.enum';
import Theme from '../../core/theme';

type Props = {
  children?: React.ReactNode;
  font?: Fonts;
  color?: string;
  size?: number;
  opacity?: number;
  style?: StyleProp<TextStyle>;
}

const Text: FunctionComponent<Props> = (props: Props) => {
  return (
    <RNText lineBreakMode='clip' style={[{
      textAlignVertical:'center',
      fontFamily: props.font ?? Theme.default.font_outfit,
      fontSize: props.size ?? Theme.default.text_size,
      color: props.color ?? Theme.default.black,
      opacity: props.opacity},
      props.style]}
    >
      {props.children}
    </RNText>
  );
};

export default Text;
