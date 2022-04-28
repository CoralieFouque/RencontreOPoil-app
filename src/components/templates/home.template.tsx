import React, { FunctionComponent, ReactChild, ReactNode } from 'react';
import { SafeAreaView, View } from 'react-native';
import IconList from '../../core/types/icon-list.type';
import HomeStyle from '../../styles/components/templates/home-template.style';
import Header from '../organisms/header.component';
import Navbar from '../organisms/navbar.component';

type Props = {
  children?: ReactNode;
  header?: boolean;
  footer?: boolean;
  leftIcon?: IconList;
  rightIcon?: IconList;
  active?: IconList;
  title?: string;
  onPressRightIcon?: () => void;
  onPressLeftIcon?: () => void;
  onMenuItemPressed?: () => void;
}

const HomeTemplate : FunctionComponent<Props> = (props : Props) => {
  return (
    <SafeAreaView style={HomeStyle.container}>
      { props.header &&
        <Header 
          leftIcon={props.leftIcon}
          rightIcon={props.rightIcon}
          title={props.title}
          onPressLeftIcon={props.onPressLeftIcon}
          onPressRightIcon={props.onPressRightIcon}
        />
      }
      <View style={HomeStyle.subContainer}>
        {props.children}
      </View>
      { props.footer &&
        <Navbar
          active={props.active} onPress={props.onMenuItemPressed}
        />
      }
    </SafeAreaView>
  );
};

export default HomeTemplate;