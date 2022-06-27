import { FunctionComponent } from "react";
import { Pressable } from "react-native";
import Theme from "../../core/theme";
import IconList from "../../core/types/icon-list.type";
import Icon from "../atoms/icon.component";

type Props = {
  color?: string;
  size?: number;
  icon?: IconList;
  fill?: string;
}

const ButtonRound : FunctionComponent<Props> = (props: Props) => {
  return(
    <Pressable style={{ backgroundColor: props.color, borderRadius: 100, height: props.size, width: props.size, justifyContent:'center', alignItems:'center' }}>
      <Icon name={props.icon} height={60} width={60} fill={props.fill}/>
    </Pressable>

  );
};
export default ButtonRound;
