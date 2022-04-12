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
import ImagePicker from 'react-native-image-crop-picker';
import firestore from '@react-native-firebase/firestore';
import styles from './styles';
import Avatar from '../../assets/add.svg';
import {UploadAvatar, UsuAtual} from '../../Api';
import Snackbar from 'react-native-snackbar';
import Input from '../../components/Input';

const EditarPerfil = () => {
  const navigation = useNavigation();

  const [nome, setNome]: any = useState('');
  const [email, setEmail]: any = useState('');
  const [senha, setSenha]: any = useState('');
  const [name, setName]: any = useState('');
  const [mail, setMail]: any = useState('');
  const [avatar, setAvatar]: any = useState();
  const [loading, setLoading] = useState(true);
  const [exibir, setExibir] = useState(false);

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

    setLoading(false);
  });

  const ImagemPicker = () => {
    ImagePicker.openPicker({
      width: 200,
      height: 200,
      cropping: true,
      cropperCircleOverlay: true,
    })
      .then(image => {
        setAvatar(image);
        setExibir(true);
      })
      .catch(e => console.log('ImagemPickerError: ' + e));
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
      {exibir === false ? (
        <TouchableOpacity onPress={() => ImagemPicker()}>
          <View style={styles.avatarOff}>
            <Avatar height={100} width={100} fill={'#3d323f'} />
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => ImagemPicker()}>
          <Image
            style={styles.avatarOff}
            source={{
              uri: avatar
                ? avatar.path
                : 'https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png',
            }}
          />
        </TouchableOpacity>
      )}

      <Input
        placeholder={nome}
        keyboardType="default"
        autoComplete="name"
        value={name}
        onChangeText={t => setName(t)}
      />
      <Input
        placeholder={email}
        keyboardType="default"
        autoComplete="email"
        value={mail}
        onChangeText={t => setMail(t)}
      />
      <Input
        placeholder={'Senha'}
        keyboardType="number-pad"
        autoComplete="password"
        secureTextEntry={true}
        value={senha}
        onChangeText={t => setSenha(t)}
      />
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
              text: 'Salvando, Aguarde!',
              duration: Snackbar.LENGTH_SHORT,
            });
            const pathfile = avatar.path;
            await UploadAvatar(pathfile);
            navigation.dispatch(
              CommonActions.reset({routes: [{name: 'Preload'}]}),
            );
          }
        }}>
        <Text style={styles.textButton}>Salvar Alterações</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default EditarPerfil;
