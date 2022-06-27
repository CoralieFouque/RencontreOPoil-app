import { FunctionComponent } from 'react';
import { View } from 'react-native';
import Theme from '../../core/theme';
import Text from '../atoms/text.component';
import ButtonRound from '../molecules/button-round.component';

const AnimalCard : FunctionComponent = () => {
  return(
    <View style={{ backgroundColor: 'lightblue', height: '80%', borderRadius: 15 }}>
      <View style={{position:'absolute', top:0, right:0, margin: 10 }}>
        <ButtonRound color={Theme.default.grey} size={50}  icon='cross' fill={Theme.default.white}/>
        </View>
      <View style={{ position:'absolute', bottom: 0, margin: 10 }}>
        <Text font={Theme.default.font_poppins_semibold} size={20}>Pruneau 2 ans</Text>
        <Text size={18}>{'Nantes < 100 km'} </Text>
      </View>
    </View>
  );
};
export default AnimalCard;