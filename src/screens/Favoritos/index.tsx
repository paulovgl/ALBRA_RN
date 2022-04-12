import {CommonActions, useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  View,
  FlatList,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import styles from './styles';
import {UsuAtual} from '../../Api';

const Favoritos = () => {
  const navigation = useNavigation();

  const [loading, setLoading] = useState(true);
  const [empty, setEmpty] = useState(false);
  const [obras, setObras] = useState([]);

  useEffect(() => {
    const uid = UsuAtual()?.uid;

    const subscriber = firestore()
      .collection('Favoritos')
      .doc(uid)
      .collection('Obras')
      .onSnapshot(querySnapshot => {
        const obras: any = [];

        if (querySnapshot.empty) {
          setEmpty(true);
        } else {
          setEmpty(false);
        }

        querySnapshot.forEach(documentSnapshot => {
          obras.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
        setObras(obras);
        setLoading(false);
      });
    return () => subscriber();
  }, []);

  const obrasDetalhes = (item: any) => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'ObrasDetalhes',
        params: {obra: item},
      }),
    );
  };

  const renderList = (item: any) => {
    return (
      <TouchableOpacity style={styles.card} onPress={() => obrasDetalhes(item)}>
        <Image style={styles.imgContainer} source={{uri: item.LinkdaImagem}} />
        <View style={styles.textCard}>
          <Text style={styles.tituloCard}>{item.NomedaObra}</Text>
          <Text style={styles.descricaoCard} numberOfLines={8}>
            {item.Descrição}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator color={'#b95835'} size={45} />
      </SafeAreaView>
    );
  } else {
    if (empty) {
      return (
        <View style={styles.container}>
          <Text style={styles.titulo}>
            Você ainda não possui obras favoritadas!
          </Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <FlatList data={obras} renderItem={({item}) => renderList(item)} />
        </View>
      );
    }
  }
};

export default Favoritos;
