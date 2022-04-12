import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  ScrollView,
  Linking,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import Snackbar from 'react-native-snackbar';
import Favovite from '../../assets/favorite.svg';
import FavoviteFull from '../../assets/favorite_full.svg';
import {DesfavoritarObra, FavoritarObra, GetTipoUsu, UsuAtual} from '../../Api';

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

const abrirLink = (url: any) => {
  Linking.canOpenURL(url).then(suporta => {
    if (suporta) {
      Linking.openURL(url);
    } else {
      Snackbar.show({text: 'Link Inválido!', duration: Snackbar.LENGTH_SHORT});
    }
  });
};

const ObrasDetalhes = ({route}: any) => {
  const [favorite, setFavorite] = useState(route.params.obra.Favorito);
  const [autorVerify, setAutorVerify] = useState<boolean>();

  useEffect(() => {
    const user = UsuAtual();

    if (user == null) {
      console.log('Usu Nulo');
    } else {
      Snackbar.dismiss();
      Verify();
    }
  });

  const Verify = async () => {
    const isAutor = await GetTipoUsu();
    if (isAutor === false) {
      setAutorVerify(false);
    } else {
      setAutorVerify(true);
    }
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.titulo}>{route.params.obra.NomedaObra}</Text>
          <Image
            style={styles.imgContainer}
            source={{uri: route.params.obra.LinkdaImagem}}
          />
          <Section titulo={'Gêneros'} />
          <Text style={styles.sectionConteudo}>
            {route.params.obra.Gêneros}
          </Text>
          <Section titulo={'Link da Obra'} />
          <Text
            style={styles.sectionConteudo}
            onPress={() => abrirLink(route.params.obra.LinkdaObra)}>
            {route.params.obra.LinkdaObra}
          </Text>
          <Section titulo={'Descrição/Sinopse'} />
          <Text style={styles.sectionConteudo}>
            {route.params.obra.Descrição}
          </Text>
          {autorVerify ? (
            <></>
          ) : favorite ? (
            <View style={{alignItems: 'center', marginTop: 30}}>
              <TouchableOpacity
                onPress={async () => {
                  setFavorite(!favorite);
                  const key = route.params.obra.key;
                  const nome = route.params.obra.key;
                  await DesfavoritarObra(nome, key);
                }}>
                <FavoviteFull height={40} width={40} fill={'#3d323f'} />
              </TouchableOpacity>
              <Text style={styles.sectionTitulo}>Remover aos Favoritos</Text>
            </View>
          ) : (
            <View style={{alignItems: 'center', marginTop: 30}}>
              <TouchableOpacity
                onPress={async () => {
                  setFavorite(!favorite);
                  const key = route.params.obra.key;
                  const no = route.params.obra.NomedaObra;
                  const lo = route.params.obra.LinkdaObra;
                  const li = route.params.obra.LinkdaImagem;
                  const gen = route.params.obra.Gêneros;
                  const des = route.params.obra.Descrição;
                  await FavoritarObra(li, no, lo, gen, des, true, key);
                }}>
                <Favovite height={40} width={40} fill={'#3d323f'} />
              </TouchableOpacity>
              <Text style={styles.sectionTitulo}>Adicionar aos Favoritos</Text>
            </View>
          )}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default ObrasDetalhes;
