import {TextInput, useTheme} from 'react-native-paper';import {  Image,  StyleSheet,  View,  KeyboardAvoidingView,  Platform} from 'react-native';import Button from '../../components/Button';import Input from '../../components/Input';import {useTranslation} from 'react-i18next';import {useLoginMutation} from '../../../services/authService';import {useState} from 'react';const useStyles = () => {  return StyleSheet.create({    wrapper: {      flex: 1,      justifyContent: 'center',      alignItems: 'center',    },    form: {      width: '80%',      gap: 8,      marginTop: 32    }  })};const LoginScreen = ({navigation}) => {  const [emailAddress, setEmailAddress] = useState('');  const [password, setPassword] = useState('');  const {t} = useTranslation();  const styles = useStyles();  const [login, {error}] = useLoginMutation();  const onLogin = async () => {    await login({      username: emailAddress,      password    });    if (!error) {      navigation.navigate('HomeScreen');    }  };  return (    <KeyboardAvoidingView      behavior={Platform.OS === "ios" ? "padding" : "height"}      style={styles.wrapper}    >      <Image        source={require('../../assets/img/logoflymore.png')}        style={{width: 128, height: 'auto', aspectRatio: 1}}        resizeMode="contain"      />      <View style={styles.form}>        <Input          placeholder={t('auth.emailAddress')}          left={<TextInput.Icon icon="mail" size={20}/>}          value={emailAddress}          onChange={e => setEmailAddress(e.nativeEvent.text)}        />        <Input          placeholder={t('auth.password')}          left={<TextInput.Icon icon="lock"/>}          secureTextEntry          value={password}          onChange={e => setPassword(e.nativeEvent.text)}          returnKeyType="go"        />        <Button          text={t('auth.login')}          onPress={onLogin}        />      </View>    </KeyboardAvoidingView>  )};export default LoginScreen;