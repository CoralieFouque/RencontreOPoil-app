import React, { FunctionComponent, ReactChild } from 'react';
import { ActivityIndicator, StyleProp, ViewStyle } from 'react-native';
import { Pressable } from 'react-native';
import Theme from '../../core/theme';
import ButtonStyle from '../../styles/components/molecules/button.style';
import Text from '../atoms/text.component';

type Props = {
  children?: ReactChild,
  disable?: boolean;
  style?: StyleProp<ViewStyle>
  isLoading?: boolean;
  onPress?: () => void;
}

const Button : FunctionComponent<Props> = (props: Props) => {
  return (
    <Pressable style={[ButtonStyle.container, props.style]} onPress={props.onPress} disabled={props.disable}>
      {props.isLoading && <ActivityIndicator size={20} color={Theme.default.white} />}
      <Text size={Theme.default.button_text_size} color={Theme.default.white}>
        {props.children}
      </Text>
    </Pressable>
  );
};

export default Button;
