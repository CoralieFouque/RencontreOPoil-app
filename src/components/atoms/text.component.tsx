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
      fontFamily: props.font ?? Fonts.OutfitRegular, 
      fontSize: props.size ?? 16, color: props.color ?? Theme.default.white, 
      opacity: props.opacity }, 
      props.style,]}
    >
      { props.children }
    </RNText>
  );
};

export default Text;
