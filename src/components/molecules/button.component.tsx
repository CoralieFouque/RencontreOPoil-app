import React, { FunctionComponent, ReactChild } from 'react';
import { Pressable } from 'react-native';
import Theme from '../../core/theme';
import ButtonStyle from '../../styles/components/molecules/button.style';
import Text from '../atoms/text.component';

type Props = {
  children?: ReactChild,
  disable?: boolean;
  onPress?: () => void;
}

const Button : FunctionComponent<Props> = (props: Props) => {
  return (
    <Pressable style={ButtonStyle.container} onPress={props.onPress} disabled={props.disable}>
      <Text size={Theme.default.button_text_size} color={Theme.default.button_text_color}>
        {props.children}
      </Text>
    </Pressable>
  );
};

export default Button;
