import { NavigationProp } from '@react-navigation/native';
import { FunctionComponent } from 'react';
import { View } from 'react-native';
import Text from '../components/atoms/text.component';
import FullButton from '../components/molecules/button-full.component';
import Tabview from '../components/organisms/tabview.component';
import HomeTemplate from '../components/templates/home.template';
import Theme from '../core/theme';
import { RootStackParamList } from '../root-stack-param-list';

type Props = {
  navigation : NavigationProp<RootStackParamList, 'Profil'>
}

const Profil : FunctionComponent<Props> = (props: Props) => {
  return (
    <HomeTemplate
      footer
      header
      onPressLeftIcon={() => props.navigation.goBack()}
    >
      <View style={{ marginBottom: 30, justifyContent: 'space-around', alignItems:'center', flex:1 }}>
        <View style={{ backgroundColor: 'lightgrey', width:110, height:110, borderRadius: 100  }} />
        <Text>Jane Doe</Text>
        <Tabview tabsNames={['Général', 'Matchs', 'Critères']} activeTab={'Général'}/>
      </View>
      <View style={{ height: 43, backgroundColor: Theme.default.green, width: '100%', justifyContent: 'center', paddingHorizontal: 14 }}>
        <Text color={Theme.default.white} style={{ }}>Compte</Text>
      </View>
      <FullButton>Modifier le profil</FullButton>
      <FullButton>Changer le mot de passe</FullButton>
      <FullButton>Langue</FullButton>
      <View style={{ height: 43, backgroundColor: Theme.default.green, width: '100%', justifyContent: 'center', paddingHorizontal: 14 }}>
        <Text color={Theme.default.white}>Autre</Text>
      </View>
      <FullButton>Confidentialité</FullButton>
      <FullButton>Paramètres</FullButton>
      <FullButton>Sécurité</FullButton>
      <FullButton>Se déconnecter</FullButton>
    </HomeTemplate>
  );
};
export default Profil;
