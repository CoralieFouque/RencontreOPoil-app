import React, { FunctionComponent } from 'react';
import { Pressable, View } from 'react-native';
import Theme from '../../core/theme';
import IconList from '../../core/types/icon-list.type';
import HeaderStyle from '../../styles/components/organisms/header.style';
import Icon from '../atoms/icon.component';
import Text from '../atoms/text.component';

type Props = {
  leftIcon?: IconList;
  rightIcon?: IconList;
  title?: string;
  onPressLeftIcon?: () => void;
  onPressRightIcon?: () => void;
}

const Header : FunctionComponent<Props> = (props: Props) => {
  return (
    <View style={HeaderStyle.container}>
      <View style={HeaderStyle.iconContainer}>
        { props.leftIcon && 
          <Pressable onPress={props.onPressLeftIcon}>
            <Icon name={props.leftIcon} fill={Theme.default.secondary}/>
          </Pressable>
        }
      </View>
      <View style={HeaderStyle.textContainer}>
        <Text>{props.title}</Text>
      </View>
      <View style={HeaderStyle.iconContainer}>
        { props.rightIcon &&
          <Pressable onPress={props.onPressRightIcon}>
            <Icon name={props.rightIcon} fill={Theme.default.secondary}/>
          </Pressable>
        }
      </View>
    </View>
  );
};

export default Header;