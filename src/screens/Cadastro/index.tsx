import {CommonActions, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {RootStackParams} from '../../../App';
import {Cadastro} from '../../Api';
import Input from '../../components/Input';
import styles from './styles';
import EmailIcon from '../../assets/email.svg';
import SenhaIcon from '../../assets/lock.svg';
import NomeIcon from '../../assets/person.svg';
import CheckEmptyIcon from '../../assets/checkEmpty.svg';
import CheckFillIcon from '../../assets/checkFill.svg';
import Snackbar from 'react-native-snackbar';

const SignUp = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [tipoUsu, setTipoUsu] = useState(false);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.titulo}>ALBRA</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <NomeIcon
          fill="#3d323f"
          width="24"
          height="24"
          style={{marginTop: 29}}
        />
        <Input
          placeholder={'Nome'}
          keyboardType="default"
          autoComplete="name"
          value={nome}
          onChangeText={t => setNome(t)}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <EmailIcon
          fill="#3d323f"
          width="24"
          height="24"
          style={{marginTop: 28}}
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
        style={styles.autorField}
        onPress={() => {
          setTipoUsu(!tipoUsu);
        }}>
        {tipoUsu == false ? (
          <CheckEmptyIcon
            fill="#3d323f"
            width="24"
            height="24"
            style={styles.checkBox}
          />
        ) : (
          <CheckFillIcon
            fill="#3d323f"
            width="24"
            height="24"
            style={styles.checkBox}
          />
        )}
        <Text style={styles.textAutor}>Deseja criar uma conta de Autor?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={async () => {
          if (email === '' && senha === '' && nome === '') {
            Snackbar.show({
              text: 'Preencha todos os campos!',
              duration: Snackbar.LENGTH_SHORT,
            });
          } else {
            Snackbar.show({
              text: 'Cadastrando, Aguarde!',
              duration: Snackbar.LENGTH_SHORT,
            });
            await Cadastro(nome, tipoUsu, email, senha);
            navigation.dispatch(
              CommonActions.reset({routes: [{name: 'Preload'}]}),
            );
          }
        }}>
        <Text style={styles.textButton}>Cadastrar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.messageButton}
        onPress={() => {
          navigation.dispatch(CommonActions.reset({routes: [{name: 'Login'}]}));
        }}>
        <Text style={{color: '#3d323f', fontSize: 16}}>
          Já possui uma conta?{' '}
        </Text>
        <Text style={{color: '#3d323f', fontSize: 16, fontWeight: 'bold'}}>
          Faça o Login
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignUp;
