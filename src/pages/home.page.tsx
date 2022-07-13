import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { FunctionComponent } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { View } from 'react-native';
import Text from '../components/atoms/text.component';
import Button from '../components/molecules/button.component';
import AnimalCard from '../components/organisms/animal-card.component';
import HomeTemplate from '../components/templates/home.template';
import Theme from '../core/theme';
import { RootStackParamList } from '../root-stack-param-list';
import Animal from '../core/types/animal.type';

type Props = {
  navigation : NativeStackNavigationProp<RootStackParamList, 'Home'>;
}

const Home : FunctionComponent<Props> = (props: Props) => {
  const [animal, setAnimal] = useState<Animal | undefined>();

  function fetchOne() : void {
    fetch('http://192.168.255.12:3001/animal/sos')
      .then((res) => res.json())
      .then((data) => setAnimal(data))
  }

  useEffect(() => {
    fetchOne();
  }, []);
  

  return(
    <HomeTemplate
      footer
      header
    >
      <View style={{ alignItems:'center', justifyContent:'space-evenly', flex:1, width:'100%', paddingBottom: 10 }}>
        <Text color={Theme.default.brown} font={Theme.default.font_poppins_semibold} size={30}>A la Une</Text>
        <Text size={25}>Et pourquoi pas eux ?</Text>
          <AnimalCard
            style = {{ justifyContent:'flex-start' }}
            animal = {animal}
            isSos
            height={356}
            width={256}
          />
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
