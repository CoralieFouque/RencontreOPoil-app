import { FunctionComponent } from 'react';
import { View, Image, ViewStyle, Pressable } from 'react-native';
import Theme from '../../core/theme';
import Text from '../atoms/text.component';
import ButtonRound from '../molecules/button-round.component';
import Animal from '../../core/types/animal.type';
import Icon from '../atoms/icon.component';

type Props = {
  moreInfos? : boolean;
  animal? : Animal;
  height? : string|number;
  width?: string|number;
  style?: ViewStyle;
  infos?: boolean;
  onPressMore?: () => void;
}

const AnimalCard : FunctionComponent<Props> = (props: Props) => {
  return(
    <View style={{ height:props.height, width:props.width, alignItems:'center', justifyContent:'center', borderRadius: 15,  shadowColor: Theme.default.black,
     }}>
       { props.animal &&
        <Image
          source={{ uri : props.animal.imageUrl }}
          style={{ width: '100%', height:'100%', borderRadius: 15,backgroundColor:Theme.default.orange }}
        />
        
      }
      { props.moreInfos && 
        <View style={{position:'absolute', top:0, right:0, margin: 10 }}>
        <ButtonRound color={Theme.default.white} size={50} iconSize={25} icon='plus' fill={Theme.default.green} onPress={props.onPressMore}/>
        </View>
      }
      { props.animal?.isSos &&
        <View style={{position:'absolute', top:0, left:0, margin: 10 }}>
          <ButtonRound color={Theme.default.white} size={50}  icon='sos' fill={Theme.default.white}/>
        </View>
      }
      { props.infos &&
        <View style={{ position:'absolute', bottom: 0, left:0, margin: 10 }}>
          <Text font={Theme.default.font_poppins_semibold} color={Theme.default.white} size={20}>{props.animal?.name}</Text>
          <Text size={18} color={Theme.default.white}><Icon name='location' fill={Theme.default.white} height={21} width={16} />{props.animal?.location} </Text>
        </View>
      }
    </View>
  );
};
export default AnimalCard;