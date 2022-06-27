import React, { FunctionComponent,  } from "react";
import { View } from "react-native";
import Text from "../components/atoms/text.component";
import ButtonRound from "../components/molecules/button-round.component";
import AnimalCard from "../components/organisms/animal-card.component";
import HomeTemplate from "../components/templates/home.template";
import Theme from "../core/theme";

const Match : FunctionComponent = () => {
  return(
    <HomeTemplate
      footer
      header
      leftIcon='back'
      headerStyle={{ backgroundColor:Theme.default.orange }}
      
    >
      <View style={{ backgroundColor: Theme.default.orange, width: '100%', height:90, justifyContent:'center', alignItems:'center' }}>
        <Text color={Theme.default.white} font={Theme.default.font_poppins} size={20} style={{textAlign: 'center', paddingHorizontal: 60}}>Découvre le chat qui te convient</Text>
      </View>
      <View style={{ flex: 1, width: '100%', justifyContent:'center', alignItems:'center' }}>
        <View style={{ height: '80%', width: '80%', justifyContent:'center' }}>
          <AnimalCard/>
        </View>
        <View style={{ flex:1, width:'100%', justifyContent:'space-evenly', flexDirection:'row', alignItems:'center'  }}>
          <ButtonRound color={Theme.default.green} size={60}  icon='cross' fill={Theme.default.white}/>
          <ButtonRound color={Theme.default.grey} size={60}  icon='cross' fill={Theme.default.white}/>
        </View>
      </View>
    </HomeTemplate>
  );
};
export default Match;
