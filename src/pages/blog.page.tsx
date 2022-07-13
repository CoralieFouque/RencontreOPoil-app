import { FunctionComponent } from "react";
import { ScrollView, View, Image } from "react-native";
import Icon from "../components/atoms/icon.component";
import Text from "../components/atoms/text.component";
import HomeTemplate from "../components/templates/home.template";
import Theme from "../core/theme";

const Blog : FunctionComponent = () => {
  return (
    <HomeTemplate
      header
      footer
    >
      <View style={{ height: 400, alignItems: 'center'}}>
        <Text font={Theme.default.font_poppins_semibold} size={25} color={Theme.default.brown}>Conseils & Astuces</Text>
          <Text color={Theme.default.grey} style={{ borderWidth: 1, borderColor: '#CAD1D6', borderRadius: 10, width: 329, height: 38, textAlignVertical:'center', paddingHorizontal: 20, marginVertical:15 }}>Rechercher</Text>
          <View style={{ flexDirection: 'row', width: '100%', justifyContent:'space-evenly', marginVertical: 15 }}>
            <Icon name='food' width={60} height={55}/>
            <Icon name='care' width={60} height={55}/>
            <Icon name='vet' width={60} height={55}/>
            <Icon name='walk' width={60} height={55}/>
          </View>
          <Text style={{alignSelf: 'flex-start', paddingLeft: 32}} size={20} >A la une</Text>
          <View style={{ height: 150, width: '100%', flexDirection: 'row', justifyContent:'space-evenly', alignItems:'center' }}>
            <Icon name='arrow-left'/>
            <Image source={require('../../assets/png/blog-1.png')} style={{ height: 140, width: 130, borderRadius: 15 }}/>
            <View style={{ width: 200 }}>
              <Text size={16}>La santé du chat sénior</Text>
              <Text size={14}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas tincidunt neque, non placerat urna ultrices eu. </Text>
            </View>
            <Icon name='arrow-right'/>


        </View>
      </View>
        <ScrollView horizontal style={{flexDirection: 'row', padding: 5 }} showsHorizontalScrollIndicator={false}>
          <View style={{ paddingHorizontal: 3 }}>
            <Image  source={require('../../assets/png/blog-2.png')} style={{ borderRadius: 15, backgroundColor:'lightblue', height: 310, width: 230,}}/>
            <Text style={{ position: "absolute",  paddingHorizontal:5, paddingVertical: 15 }} size={20} color={Theme.default.black} font={Theme.default.font_poppins_semibold} >5 conseils pour prendre soin de son chien au quotidien</Text>
          </View>
          <View style={{ paddingHorizontal: 3 }}>
            <Image  source={require('../../assets/png/blog-3.png')} style={{ borderRadius: 15, backgroundColor:'lightblue', height: 310, width: 230,}}/>
            <Text style={{ position: "absolute",  paddingHorizontal:5, paddingVertical: 15 }} size={20} color={Theme.default.black} font={Theme.default.font_poppins_semibold} >Partir en vacance avec ses animaux</Text>
          </View>
          <View style={{ paddingHorizontal: 3 }}>
            <Image  source={require('../../assets/png/blog-4.png')} style={{ borderRadius: 15, backgroundColor:'lightblue', height: 310, width: 230,}}/>
            <Text style={{ position: "absolute",  paddingHorizontal:5, paddingVertical: 15 }} size={20} color={Theme.default.black} font={Theme.default.font_poppins_semibold} >Accueillir un animal avec des enfants</Text>
          </View>


          
        </ScrollView>
    </HomeTemplate>
  )
};
export default Blog;
