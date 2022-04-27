import React, { FunctionComponent } from 'react';
import { Pressable } from 'react-native';
import Theme from '../../core/theme';
import ButtonStyle from '../../styles/components/molecules/button.style';
import Text from '../atoms/text.component';

type Props = {
  children?: ChildNode,
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
