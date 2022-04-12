import {CommonActions, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {RootStackParams} from '../../../App';
import {Login} from '../../Api';
import Input from '../../components/Input';
import styles from './styles';
import EmailIcon from '../../assets/email.svg';
import SenhaIcon from '../../assets/lock.svg';
import Snackbar from 'react-native-snackbar';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.titulo}>ALBRA</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <EmailIcon
          fill="#3d323f"
          width="24"
          height="24"
          style={{marginTop: 29}}
        />
        <Input
          placeholder={'Email'}
          keyboardType="default"
          autoComplete="email"
          value={email}
          onChangeText={t => setEmail(t)}
        />
      </View>

      <View style={{flexDirection: 'row'}}>
        <SenhaIcon
          fill="#3d323f"
          width="24"
          height="24"
          style={{marginTop: 28}}
        />
        <Input
          placeholder={'Senha'}
          keyboardType="number-pad"
          autoComplete="password"
          secureTextEntry={true}
          value={senha}
          onChangeText={t => setSenha(t)}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={async () => {
          if (email === '' && senha === '') {
            Snackbar.show({
              text: 'Preencha todos os campos!',
              duration: Snackbar.LENGTH_SHORT,
            });
          } else {
            Snackbar.show({
              text: 'Logando, Aguarde!',
              duration: Snackbar.LENGTH_SHORT,
            });
            await Login(email, senha);
            navigation.dispatch(
              CommonActions.reset({routes: [{name: 'Preload'}]}),
            );
          }
        }}>
        <Text style={styles.textButton}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.messageButton}
        onPress={() => {
          navigation.dispatch(
            CommonActions.reset({routes: [{name: 'Cadastro'}]}),
          );
        }}>
        <Text style={{color: '#3d323f', fontSize: 16}}>
          Ainda não possui uma conta?{' '}
        </Text>
        <Text style={{color: '#3d323f', fontSize: 16, fontWeight: 'bold'}}>
          Faça o Cadastro
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignIn;
