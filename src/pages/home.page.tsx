import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import Text from '../components/atoms/text.component';
import Button from '../components/molecules/button.component';
import HomeTemplate from '../components/templates/home.template';
import Theme from '../core/theme';
import { RootStackParamList } from '../root-stack-param-list';

type Props = {
  navigation : NativeStackNavigationProp<RootStackParamList, 'Home'>;
}

const Home : FunctionComponent<Props> = (props: Props) => {
  return(
    <HomeTemplate
      footer
      header
      rightIcon='menu'
    >
      <View style={{ alignItems:'center', justifyContent:'space-around', flex:1, width:'100%' }}>
        <Text color={Theme.default.brown} font={Theme.default.font_poppins_semibold} size={30}>A la Une</Text>
        <Text size={25} >Ils ont besoin de toi ...</Text>
        <View style={{ backgroundColor:'lightgrey', height:356, width:256, borderRadius:15 }}/>
        <View style={{ backgroundColor:'grey', height:13, width:100, borderRadius:15 }}/>
        <Button style={{ width:205 }} onPress={() => props.navigation.navigate('Match') }>Commencer</Button>
      </View>
    </HomeTemplate>
    
  );
}
export default Home;

/**
 * DOCUMENTATION
 * 
 * Parent component code example:
 * 
 * const [activeTab, setActiveTab] = useState<string>('tab1');
 * 
 * function tabPressed(name: string): void {
 *   setActiveTab(name);
 * }
 * 
 * return (
 *   <View>
 *     <TabView tabsNames={['tab1', 'tab2']} activeTab={activeTab} onPress={tabPressed} disabledTabs={['tab2']}></TabView>
 *   </View>
 * );
 */
