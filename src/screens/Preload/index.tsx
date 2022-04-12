import {CommonActions, useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {SafeAreaView, Text, ActivityIndicator} from 'react-native';
import styles from './styles';
import {GetTipoUsu, UsuAtual} from '../../Api';
import Snackbar from 'react-native-snackbar';

const Preload = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const user = UsuAtual();

    if (user == null) {
      navigation.dispatch(CommonActions.reset({routes: [{name: 'Login'}]}));
    } else {
      Snackbar.dismiss();
      Rotas();
    }
  });

  const Rotas = async () => {
    const isAutor = await GetTipoUsu();
    if (isAutor == false) {
      navigation.dispatch(CommonActions.reset({routes: [{name: 'Leitor'}]}));
    } else {
      navigation.dispatch(CommonActions.reset({routes: [{name: 'Autor'}]}));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>ALBRA</Text>
      <ActivityIndicator color={'#b95835'} size={45} />
    </SafeAreaView>
  );
};

export default Preload;
