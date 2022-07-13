import { FunctionComponent } from "react";
import { Pressable } from "react-native";
import IconList from "../../core/types/icon-list.type";
import Icon from "../atoms/icon.component";

type Props = {
  color?: string;
  size?: number;
  icon?: IconList;
  fill?: string;
  iconSize?: number;
  onPress?: () => void;
}

const ButtonRound : FunctionComponent<Props> = (props: Props) => {
  return(
    <Pressable style={{ backgroundColor: props.color, borderRadius: 100, height: props.size, width: props.size, justifyContent:'center', alignItems:'center' }} onPress={props.onPress}>
      <Icon name={props.icon} height={props.iconSize ? props.iconSize : props.size} width={props.iconSize ? props.iconSize : props.size} fill={props.fill}/>
    </Pressable>

  );
};
export default ButtonRound;
