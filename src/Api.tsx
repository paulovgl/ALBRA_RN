import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import {Alert} from 'react-native';
import Snackbar from 'react-native-snackbar';

// Autenticação
export async function Cadastro(
  nome: string,
  tipoUsu: boolean,
  email: string,
  senha: string,
) {
  await auth()
    .createUserWithEmailAndPassword(email, senha)
    .then(() => {
      console.log('Usuário criado e logado');
      UsuCadastro(nome, tipoUsu, email);
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('Cadastro: Este email já está em uso');
        Snackbar.show({
          text: 'Este email já está em uso',
          duration: Snackbar.LENGTH_SHORT,
        });
      } else if (error.code === 'auth/invalid-email') {
        console.log('Cadastro: Este email é inválido');
        Snackbar.show({
          text: 'Este email é inválido',
          duration: Snackbar.LENGTH_SHORT,
        });
      } else {
        console.error(error);
      }
    });
}

export async function Login(email: string, senha: string) {
  await auth()
    .signInWithEmailAndPassword(email, senha)
    .then(() => {
      console.log('Usuário logado com sucesso');
    })
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode == 'auth/weak-password') {
        Alert.alert('The password is too weak.');
      } else {
        Alert.alert(errorMessage);
      }
      console.log(error);
    });
}

export async function Logout() {
  auth().signOut();
  console.log('Usuario deslogado');
}

export function UsuAtual() {
  return auth().currentUser;
}

// Firebase
export async function UsuCadastro(
  nome: string,
  tipoUsu: boolean,
  email: string,
) {
  const uid = auth().currentUser?.uid;

  await firestore()
    .collection('Usuarios')
    .doc(uid)
    .set({
      nome: nome,
      tipoUsu: tipoUsu,
      email: email,
    })
    .then(() => {
      console.log('Usuário cadastrado no Firebase');
    });
}

export async function GetTipoUsu() {
  const uid = auth().currentUser?.uid;

  const docRef = await firestore().collection('Usuarios').doc(uid).get();

  const isAutor = docRef.get('tipoUsu');

  if (isAutor === false) {
    return false;
  } else {
    return true;
  }
}

export async function CadastrarObraPorAutor(
  li: string,
  no: string,
  lo: string,
  gn: string,
  des: string,
) {
  const usu = auth().currentUser?.uid;
  firestore()
    .collection('Obras Por Autor')
    .doc(usu)
    .collection('Obras')
    .doc(no)
    .set({
      NomedaObra: no,
      LinkdaObra: lo,
      LinkdaImagem: li,
      Gêneros: gn,
      Descrição: des,
    })
    .then(() => console.log('Obra Cadastrada, ', no));
}

export async function CadastrarObra(
  li: string,
  no: string,
  lo: string,
  gn: string,
  des: string,
  fav?: boolean,
) {
  firestore()
    .collection('Obras Gerais')
    .doc(no)
    .set({
      NomedaObra: no,
      LinkdaObra: lo,
      LinkdaImagem: li,
      Gêneros: gn,
      Descrição: des,
      Favorito: fav ? fav : false,
    })
    .then(() => console.log('Obra Cadastrada, ', no));
}

export async function FavoritarObra(
  li: string,
  no: string,
  lo: string,
  gn: string,
  des: string,
  fav: boolean,
  key: string,
) {
  const uid = auth().currentUser?.uid;
  firestore()
    .collection('Favoritos')
    .doc(uid)
    .collection('Obras')
    .doc(key)
    .set({
      NomedaObra: no,
      LinkdaObra: lo,
      LinkdaImagem: li,
      Gêneros: gn,
      Descrição: des,
      Favorito: fav,
    })
    .then(() => console.log('Obra Favoritada, ', no));

  firestore().collection('Obras Gerais').doc(no).update({Favorito: true});
}

export async function DesfavoritarObra(no: string, key: string) {
  const uid = auth().currentUser?.uid;
  firestore()
    .collection('Favoritos')
    .doc(uid)
    .collection('Obras')
    .doc(key)
    .delete()
    .then(() => console.log('Obra Desfavoritada, ', no));

  firestore().collection('Obras Gerais').doc(no).update({Favorito: false});
}

// Storage
export async function UploadAvatar(uri: string) {
  const usu = auth().currentUser?.uid;
  const ref = storage().ref(`avatar/${usu}`);

  await ref.putFile(uri);
}
