import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {CommonActions, useNavigation} from '@react-navigation/native';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import styles from './styles';
import Avatar from '../../assets/person.svg';
import {Logout, UsuAtual} from '../../Api';

const Perfil = () => {
  const navigation = useNavigation();

  const [uri, setUri]: any = useState(
    'https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png',
  );
  const [nome, setNome]: any = useState('');
  const [email, setEmail]: any = useState('');
  const [temAvatar, setTemAvatar] = useState(false);
  const [avatarErro, setAvatarErro] = useState(false);
  const [ativar, setAtivar] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const usu = UsuAtual()?.uid;

    firestore()
      .collection('Usuarios')
      .doc(usu)
      .get()
      .then(documentSnapshot => {
        if (documentSnapshot.exists) {
          setNome(documentSnapshot.get('nome'));
          setEmail(documentSnapshot.get('email'));
        }
      });

    setAtivar(true);

    if (avatarErro === false) {
      setTemAvatar(true);
    } else {
      setTemAvatar(false);
    }
  });

  if (ativar === true) {
    const usu = UsuAtual()?.uid;
    const ref = storage().ref(`avatar/${usu}`);
    ref
      .getDownloadURL()
      .then(url => {
        setUri(url);
        setLoading(false);
        setAvatarErro(false);
      })
      .catch(e => {
        console.log('getting downloadURL of image error => ', e);
        setAvatarErro(true);
        setLoading(false);
      });
  }

  interface i {
    titulo: string;
  }
  const Section = ({titulo}: i) => {
    return (
      <View style={{marginTop: 10, flexDirection: 'row', alignItems: 'center'}}>
        <View style={styles.dividerLeft} />
        <Text style={styles.sectionTitulo}>{titulo}</Text>
        <View style={styles.dividerRight} />
      </View>
    );
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.containerLoading}>
        <ActivityIndicator color={'#b95835'} size={45} />
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      {temAvatar === false ? (
        <View style={styles.avatarOff}>
          <Avatar height={150} width={150} fill={'#3d323f'} />
        </View>
      ) : (
        <Image
          style={styles.avatarOff}
          source={{
            uri: uri,
          }}
        />
      )}
      <TouchableOpacity
        style={styles.imgButao}
        onPress={() => {
          navigation.dispatch(CommonActions.navigate({name: 'EditarPerfil'}));
        }}>
        <Text style={styles.imgText}>Editar Perfil</Text>
      </TouchableOpacity>
      <Section titulo="Nome" />
      <Text style={styles.sectionConteudo}>{nome}</Text>
      <Section titulo="E-mail" />
      <Text style={styles.sectionConteudo}>{email}</Text>

      <TouchableOpacity
        style={styles.sairBtn}
        onPress={async () => {
          await Logout();
          navigation.dispatch(
            CommonActions.reset({routes: [{name: 'Preload'}]}),
          );
        }}>
        <Text style={styles.imgText}>Sair/Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Perfil;
