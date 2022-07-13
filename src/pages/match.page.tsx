import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { promiseImpl } from "ejs";
import React, { FunctionComponent, useState,  } from "react";
import { useEffect } from "react";
import { View } from "react-native";
import Text from "../components/atoms/text.component";
import ButtonRound from "../components/molecules/button-round.component";
import AnimalCard from "../components/organisms/animal-card.component";
import HomeTemplate from "../components/templates/home.template";
import Theme from "../core/theme";
import Animal from "../core/types/animal.type";
import { RootStackParamList } from "../root-stack-param-list";

type Props = {
  navigation : NativeStackNavigationProp<RootStackParamList, 'Match'>
}

const Match : FunctionComponent<Props> = (props : Props) => {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [current, setCurrent] = useState<number>(0);

  function fetchAnimals(){
    fetch('http://192.168.1.38:3001/animal/all')
      .then((res) => res.json())
      .then((data) => setAnimals(data))
  }

  function onPressPass(): void {
    if(current < animals.length-1) setCurrent(current + 1);
  }

  function onPressMore(): void {
    if (!animals) return;
    props.navigation.navigate('AnimalProfile', { animalId: animals[current].id })
  }

  function onGoBack(): void {
    props.navigation.goBack();
  }

  useEffect(() => {
    fetchAnimals();
  }, []);

  return(
    <HomeTemplate
      footer
      header
      leftIcon='back'
      onPressLeftIcon={onGoBack}
      headerStyle={{ backgroundColor:Theme.default.orange }}
      statusbarColor={Theme.default.orange}
      leftIconColor={Theme.default.white}
    >
      <View style={{ backgroundColor: Theme.default.orange, width: '100%', height:90, justifyContent:'center', alignItems:'center' }}>
        <Text color={Theme.default.white} font={Theme.default.font_poppins} size={20} style={{textAlign: 'center', paddingHorizontal: 60}}>Découvre le chat qui te convient</Text>
      </View>
      <View style={{ flex: 1, width: '100%', justifyContent:'space-evenly', alignItems:'center' }}>
          <AnimalCard
            animal= {animals[current]}
            moreInfos
            infos
            height={400}
            width={320}
            onPressMore={() => onPressMore()}
          />
        <View style={{ width:'100%', justifyContent:'space-evenly', flexDirection:'row', alignItems:'center'  }}>
          <ButtonRound color={Theme.default.orange} size={60}  icon='cross' fill={Theme.default.white} onPress={() => onPressPass()} />
          <ButtonRound color={Theme.default.green} size={60} iconSize={30}  icon='heart' fill={Theme.default.white}/>
        </View>
      </View>
    </HomeTemplate>
  );
};
export default Match;
