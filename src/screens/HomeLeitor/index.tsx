import {CommonActions, useNavigation} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {Logout} from '../../Api';
import styles from './styles';

const HomeLeitor = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Home Leitor</Text>
      <TouchableOpacity
        onPress={async () => {
          await Logout();
          navigation.dispatch(
            CommonActions.reset({routes: [{name: 'Preload'}]}),
          );
        }}>
        <Text>Sair</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeLeitor;
