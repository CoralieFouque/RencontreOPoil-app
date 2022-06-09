import { FunctionComponent } from 'react';
import { View } from 'react-native';
import Tab from '../molecules/tab.component';
type Props = {
  tabsNames: string[];
  disabledTabs?: string[];
  activeTab?: string;
  onPress?: (name: string) => void;
}
const MAX_TAB = 3;

const Tabview : FunctionComponent<Props> = (props : Props) => {

  /**
   * Display tabs
   * @returns {JSX.Element[]} array of error text elements
   */
    function displayTabs(): JSX.Element[] {
      return props.tabsNames.slice(0, MAX_TAB).map((name, i) => (
        <Tab key={i} name={name} active={name === props.activeTab} onPress={props.onPress} disabled={props.disabledTabs && props.disabledTabs.includes(name)}/>
      ));
    }
  
    return (
      <View style={{ flexDirection: 'row', width:'100%', paddingHorizontal: 50, justifyContent: 'space-around' }}>
        {displayTabs()}
      </View>
    );

};
export default Tabview;
