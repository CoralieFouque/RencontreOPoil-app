import React, { FunctionComponent } from 'react';
import { ViewStyle } from 'react-native';
import { Pressable, TextStyle, StyleSheet, View } from 'react-native';
import TabStyle from '../../styles/components/molecules/tab.style';
import Text from '../atoms/text.component';

type Props = {
  name: string;
  active?: boolean;
  disabled?: boolean;
  onPress?: (name: string) => void;
}

const Tab: FunctionComponent<Props> = (props:Props) => {
  /**
   * Catch the click and call props.onPress
   * @returns {void}
   */
  function onTabPress(): void {
    if (props.onPress && !props.disabled && !props.active) props.onPress(props.name);
  }

  /**
   * Define style based on props.active
   * @returns {ViewStyle} a style
   */
  function getLineStyle(): ViewStyle {
    if (props.active) return StyleSheet.flatten([TabStyle.line, TabStyle.activeLine]);
    return TabStyle.line;
  }

  function getPressableStyle(): TextStyle {
    if (props.active) return TabStyle.activeText;
    return TabStyle.text;
  }

  return (
    <Pressable style={TabStyle.container} onPress={onTabPress} disabled={props.disabled} >
      <Text style={getPressableStyle()}>{props.name}</Text>
      <View style={getLineStyle()} />
    </Pressable>
  );
};

export default Tab;
