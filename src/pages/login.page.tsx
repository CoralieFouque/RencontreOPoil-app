import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { FunctionComponent } from "react";
import { Dimensions, StatusBar, View, Image } from "react-native";
import Icon from "../components/atoms/icon.component";
import Text from "../components/atoms/text.component";
import Button from "../components/molecules/button.component";
import Input from "../components/molecules/input.component";
import Theme from "../core/theme";
import LoginForm from "../core/types/login-form-data.types";
import LoginFormKeys from "../core/types/login-form-keys.types";
import { RootStackParamList } from "../root-stack-param-list";
import LoginStyle from "../styles/pages/login.style";

type Props= {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>
}

const Login : FunctionComponent<Props> = (props: Props) => {
  const [canLog, setCanLog] = useState<Boolean>(true);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [formData, setFormData] = useState<LoginForm>({
    mail: {
      value: '',
      errorLabel: undefined,
      isDirty: false
    },
    password: {
      value: '',
      errorLabel: undefined,
      isDirty: false
    }
  });

  function changeFormData(key: LoginFormKeys, value: string): void {
    if (!Object.keys(formData).includes(key)) return;


    setFormData((oldValue) => ({
      ...oldValue,
      [key]: { ...oldValue[key], value, dirty:true },
    }));
  }

  function checkMail(): void {
    const regex = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const _form = {...formData}
    if (!regex.test(formData.mail.value)) _form.mail.errorLabel='Mauvais format';
    else _form.mail.errorLabel=undefined;
  }

  function onPressConnect(): void {
    setIsLoading(true);
    if(formData.mail.value === 'coco@mail.com' && formData.password.value === '111') {
      setIsLoading(false);
      setCanLog(true);
      props.navigation.replace('Home');
    } else setCanLog(false);
    setIsLoading(false);
  }


  return (
    <View style={LoginStyle.container}>
        <Image source={require('../../assets/png/login-background.png')} style={{ width: '100%', height:'50%' }}/>
      <View style={LoginStyle.iconContainer}>
        <Icon name='logo-blanc' height={114} width={114}/>
      </View>
      <View style={LoginStyle.formContainer}>
        {!canLog && <Text color={Theme.default.error }>Mauvais identifiant ou mot de passe</Text>}
        <Input 
          placeholder='Email'
          label='Email'
          errorLabel={formData.mail.errorLabel}
          onChange={((t) => changeFormData('mail', t))}
          onBlur={checkMail}
        />
        <View style={LoginStyle.inputContainer}>
          <Input
            placeholder='Mot de passe'
            label='Mot de passe'
            onChange={(t) => changeFormData('password', t)}
          />
          <Text style={LoginStyle.forgotLink} color={Theme.default.grey} size={14}>Mot de passe oublié ?</Text>
        </View>
          <Button style={LoginStyle.button} onPress={onPressConnect} isLoading={isLoading} >Se connecter</Button>
      </View>

    </View>

  );
};
export default Login;
