import React, { FunctionComponent } from 'react';
import { NativeSyntheticEvent, TextInput, TextInputFocusEventData, View } from 'react-native';
import Theme from '../../core/theme';
import InputStyle from '../../styles/components/molecules/input.style';
import Text from '../atoms/text.component';

type Props = {
  editable?: boolean;
  placeholder?: string;
  errorLabel?: string;
  label?: string;
  onChange?: (text: string) => void;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
}

const Input: FunctionComponent<Props> = (props: Props) => {
  return (
    <View style={InputStyle.container}> 
      { props.label &&
        <Text color={Theme.default.black} font={Theme.default.font_secondary} opacity={0.6} size={12}>{props.label}</Text>
      }
      <TextInput 
        editable={props.editable}
        placeholder={props.placeholder}
        style={InputStyle.inputText}
        onChangeText={props.onChange}
        onBlur={props.onBlur}
      />
      { props.errorLabel &&
        <Text color={Theme.default.error} font={Theme.default.font_secondary} opacity={0.4} size={12}>{props.errorLabel}</Text>
      }
    </View>
  );
}

export default Input;
