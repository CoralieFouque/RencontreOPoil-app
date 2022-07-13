import React, { FunctionComponent, ReactChild, ReactNode } from 'react';
import { SafeAreaView, StatusBar, View, ViewStyle } from 'react-native';
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
  title?: string;
  headerStyle?: ViewStyle;
  leftIconColor?: string;
  statusbarColor?: string;
  onPressRightIcon?: () => void;
  onPressLeftIcon?: () => void;
}

const HomeTemplate : FunctionComponent<Props> = (props : Props) => {
  return (
    <SafeAreaView style={[HomeStyle.container]}>
      {StatusBar.setBackgroundColor(props.statusbarColor ?? 'white')}
      { props.header &&
        <Header 
          leftIcon={props.leftIcon}
          leftIconColor={props.leftIconColor}
          rightIcon={props.rightIcon}
          title={props.title}
          onPressLeftIcon={props.onPressLeftIcon}
          onPressRightIcon={props.onPressRightIcon}
          style={props.headerStyle}
        />
      }
      <View style={HomeStyle.subContainer}>
        {props.children}
      </View>
      { props.footer &&
        <Navbar/>
      }
    </SafeAreaView>
  );
};

export default HomeTemplate;